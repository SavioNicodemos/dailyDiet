import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Container, Content, Footer, ItemDetails, DateTitle, DatetimeText, Description, Name, OnDietContainer, Indicator, OnDietText } from './styles';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { useState } from 'react';
import { useMeals } from '@hooks/useMeals';
import { Alert } from 'react-native';
import { i18n } from '@langs/i18n';

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
      Alert.alert(i18n.t('errors.meal'), i18n.t('errors.deleteMeal'))
    }
  }

  function handleEditMeal() {
    navigation.navigate('newMeal', { id })
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
        title={i18n.t('pages.viewMeal.meal')}
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
            {i18n.t('pages.viewMeal.dateAndTime')}
          </DateTitle>
          <DatetimeText>
            {selectedMeal?.date} {i18n.t('pages.viewMeal.at')} {selectedMeal?.time}
          </DatetimeText>

          <OnDietContainer>
            <Indicator type={colorSchemeType} />
            <OnDietText>
              {selectedMeal?.isOnDiet ? i18n.t('pages.viewMeal.onDiet') : i18n.t('pages.viewMeal.offDiet')}
            </OnDietText>
          </OnDietContainer>
        </ItemDetails>
        <Footer>
          <Button title={i18n.t('pages.viewMeal.editMeal')} icon='edit-3' onPress={handleEditMeal} />
          <Button type='SECONDARY' title={i18n.t('pages.viewMeal.deleteMeal')} icon='trash-2' onPress={handleOpenModal} />
        </Footer>
      </Content>
      <Modal
        visible={modalVisible}
        message={i18n.t('pages.viewMeal.confirmDelete')}
        onClose={handleCloseModal}
        onConfirm={handleDeleteMeal}
      />
    </Container>
  )
};
