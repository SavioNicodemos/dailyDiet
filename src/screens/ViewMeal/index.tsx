import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Container, Content, Footer, ItemDetails, DateTitle, DatetimeText, Description, Name, OnDietContainer, Indicator, OnDietText } from './styles';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { useState } from 'react';
import { useMeals } from '@hooks/useMeals';
import { Alert } from 'react-native';

type RouteParams = {
  id: string;
}

export const ViewMeal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute()
  const { findMealById, deleteMeal } = useMeals();

  const { id } = route.params as RouteParams;

  const selectedMeal = findMealById(id);

  const colorSchemeType = selectedMeal?.isOnDiet ? 'PRIMARY' : 'SECONDARY';

  async function handleDeleteMeal() {
    try {
      await deleteMeal(id);
      handleGoToHome();
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível deletear a refeição selecionada')
    }
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleGoToHome() {
    navigation.navigate('home');
  }
  return (
    <Container type={colorSchemeType}>
      <Header
        title='Refeição'
        onBackPress={handleGoToHome}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <ItemDetails>

          <Name>
            {selectedMeal?.name}
          </Name>

          <Description>
            {selectedMeal?.description}
          </Description>

          <DateTitle>
            Data e hora
          </DateTitle>
          <DatetimeText>
            {selectedMeal?.date} às {selectedMeal?.time}
          </DatetimeText>

          <OnDietContainer>
            <Indicator type={colorSchemeType} />
            <OnDietText>
              {selectedMeal?.isOnDiet ? 'dentro' : 'fora'} da dieta
            </OnDietText>
          </OnDietContainer>
        </ItemDetails>
        <Footer>
          <Button title="Editar refeição" icon='edit-3' />
          <Button type='SECONDARY' title="Excluir Refeição" icon='trash-2' onPress={handleOpenModal} />
        </Footer>
      </Content>
      <Modal
        visible={modalVisible}
        message='Deseja realmente excluir o registro de  refeição?'
        onClose={handleCloseModal}
        onConfirm={handleDeleteMeal}
      />
    </Container>
  )
};
