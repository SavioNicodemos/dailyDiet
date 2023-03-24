import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Container, Content, Footer, ItemDetails, DateTitle, DatetimeText, Description, Name, OnDietContainer, Indicator, OnDietText } from './styles';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { useState } from 'react';

export const ViewMeal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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
    <Container type='PRIMARY'>
      <Header
        title='Refeição'
        onBackPress={handleGoToHome}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <ItemDetails>

          <Name>
            Sanduíche
          </Name>

          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>

          <DateTitle>
            Data e hora
          </DateTitle>
          <DatetimeText>
            12/08/2022 às 16:00
          </DatetimeText>

          <OnDietContainer>
            <Indicator type='PRIMARY' />
            <OnDietText>
              dentro da dieta
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
      />
    </Container>
  )
};
