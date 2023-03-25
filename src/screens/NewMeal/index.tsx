import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import { DateTimeInput } from '@components/DateTimeInput';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { IsOnDietToggle } from '@components/IsOnDietToggle';

import { Container, Content, DateTimeContainer, Form } from './styles';
import { useMeals } from '@hooks/useMeals';
import { MealDTO } from 'src/@dtos/MealDTO';

type AddUpdateMeal = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet?: boolean,
}

type RouteParams = {
  id?: string;
}

export const NewMeal = () => {
  const [meal, setMeal] = useState<AddUpdateMeal>({
    id: undefined,
    name: '',
    description: '',
    date: '',
    time: '',
    isOnDiet: undefined,
  });

  const isEditMode = !!meal?.id;

  const { storeMeal, findMealById, updateMeal } = useMeals();

  const navigation = useNavigation();

  const route = useRoute();

  const { id } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSubmitMeal() {
    try {
      if (meal.isOnDiet === undefined) {
        return Alert.alert('Inválido', 'Por favor, preencha todos os campos do formulário!')
      };

      const isValid = meal.name && meal.description && meal.date && meal.time;
      if (!isValid) {
        Alert.alert('Inválido', 'Por favor, preencha todos os campos do formulário!')
      }

      if (isEditMode) {
        await updateMeal(meal as MealDTO);
        if (meal.id) {
          return navigation.navigate('viewMeal', { id: meal.id })
        }
        navigation.navigate('home');
      }

      await storeMeal(meal as MealDTO);
      navigation.navigate('finishedRegistration', { isOnDiet: meal.isOnDiet })
    } catch (error) {
      Alert.alert('Nova refeição', 'Erro ao criar nova refeição!')
    }
  }

  useEffect(() => {
    if (id) {
      const meal = findMealById(id);
      if (meal) {
        setMeal(meal);
      }
    }
  }, [id]);

  return (
    <Container>
      <Header
        title={isEditMode ? 'Editar refeição' : 'Nova refeição'}
        onBackPress={handleGoBack}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <Form>
          <Input
            title='Nome'
            onChangeText={name => setMeal(prev => ({ ...prev, name }))}
            defaultValue={meal.name}
          />

          <Input
            title='Descrição'
            multiline
            numberOfLines={5}
            onChangeText={description => setMeal(prev => ({ ...prev, description }))}
            defaultValue={meal.description}
          />

          <DateTimeContainer>
            <DateTimeInput
              title='Data'
              mode='date'
              onDateChange={date => setMeal(prev => ({ ...prev, date }))}
              defaultValue={meal.date}
            />
            <DateTimeInput
              title='Hora'
              mode='time'
              onDateChange={time => setMeal(prev => ({ ...prev, time }))}
              defaultValue={meal.time}
            />
          </DateTimeContainer>

          <IsOnDietToggle
            title='Está dentro da dieta?'
            buttonTitles={['Sim', 'Não']}
            onChange={isOnDiet => setMeal(prev => ({ ...prev, isOnDiet }))}
            defaultValue={meal.isOnDiet}
          />
        </Form>

        <Button
          title={isEditMode ? 'Salvar alterações' : 'Cadastrar Refeição'}
          style={{ marginVertical: 24 }}
          onPress={() => handleSubmitMeal()}
        />
      </Content>
    </Container>
  )
};
