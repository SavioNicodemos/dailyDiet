import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { DateTimeInput } from '@components/DateTimeInput';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { IsOnDietToggle } from '@components/IsOnDietToggle';

import { Container, Content, DateTimeContainer, Form } from './styles';

export const NewMeal = () => {
  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <Header
        title='Nova refeição'
        onBackPress={handleGoToHome}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <Form>
          <Input title='Nome' />
          <Input title='Descrição' multiline numberOfLines={5} />

          <DateTimeContainer>
            <DateTimeInput title='Data' mode='date' />
            <DateTimeInput title='Hora' mode='time' />
          </DateTimeContainer>

          <IsOnDietToggle title='Está dentro da dieta?' buttonTitles={['Sim', 'Não']} />
        </Form>

        <Button title='Cadastrar Refeição' style={{ marginVertical: 24 }} />
      </Content>
    </Container>
  )
};
