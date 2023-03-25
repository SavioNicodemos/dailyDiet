import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { DateTimeInput } from '@components/DateTimeInput';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { IsOnDietToggle } from '@components/IsOnDietToggle';

import { Container, Content, DateTimeContainer, Form } from './styles';
import { useState } from 'react';
import { MealDTO } from 'src/@dtos/MealDTO';
import { Alert } from 'react-native';
import { useMeals } from '@hooks/useMeals';

export const NewMeal = () => {
  const [meal, setMeal] = useState<MealDTO>({
    name: '',
    description: '',
    date: '',
    time: '',
    isOnDiet: true,
  });

  const { storeMeal } = useMeals();

  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate('home');
  }

  async function handleSubmitMeal() {
    try {
      const isValid = meal.name && meal.description && meal.date && meal.time;
      if (!isValid) {
        Alert.alert('Inválido', 'Por favor, preencha todos os campos do formulário!')
      }
      await storeMeal(meal);
      navigation.navigate('finishedRegistration', { isOnDiet: meal.isOnDiet })
    } catch (error) {
      Alert.alert('Nova refeição', 'Erro ao criar nova refeição!')
    }
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
          <Input
            title='Nome'
            onChangeText={name => setMeal(prev => ({ ...prev, name }))}
          />

          <Input
            title='Descrição'
            multiline
            numberOfLines={5}
            onChangeText={description => setMeal(prev => ({ ...prev, description }))}
          />

          <DateTimeContainer>
            <DateTimeInput
              title='Data'
              mode='date'
              onDateChange={date => setMeal(prev => ({ ...prev, date }))}
            />
            <DateTimeInput
              title='Hora'
              mode='time'
              onDateChange={time => setMeal(prev => ({ ...prev, time }))}
            />
          </DateTimeContainer>

          <IsOnDietToggle
            title='Está dentro da dieta?'
            buttonTitles={['Sim', 'Não']}
            onChange={isOnDiet => setMeal(prev => ({ ...prev, isOnDiet }))}
          />
        </Form>

        <Button title='Cadastrar Refeição' style={{ marginVertical: 24 }} onPress={() => handleSubmitMeal()} />
      </Content>
    </Container>
  )
};
