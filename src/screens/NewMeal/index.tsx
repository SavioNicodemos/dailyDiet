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
import { i18n } from '@langs/i18n';

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
        return Alert.alert(i18n.t('errors.invalid'), i18n.t('errors.fillAllFields'))
      };

      const isValid = meal.name && meal.description && meal.date && meal.time;
      if (!isValid) {
        Alert.alert(i18n.t('errors.invalid'), i18n.t('errors.fillAllFields'))
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
      Alert.alert(i18n.t('errors.newMeal'), i18n.t('errors.createNewMeal'))
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
        title={isEditMode ? i18n.t('pages.newMeal.editMeal') : i18n.t('pages.newMeal.newMeal')}
        onBackPress={handleGoBack}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <Form>
          <Input
            title={i18n.t('pages.newMeal.name')}
            onChangeText={name => setMeal(prev => ({ ...prev, name }))}
            defaultValue={meal.name}
          />

          <Input
            title={i18n.t('pages.newMeal.description')}
            multiline
            numberOfLines={5}
            onChangeText={description => setMeal(prev => ({ ...prev, description }))}
            defaultValue={meal.description}
          />

          <DateTimeContainer>
            <DateTimeInput
              title={i18n.t('pages.newMeal.date')}
              mode='date'
              onDateChange={date => setMeal(prev => ({ ...prev, date }))}
              defaultValue={meal.date}
            />
            <DateTimeInput
              title={i18n.t('pages.newMeal.time')}
              mode='time'
              onDateChange={time => setMeal(prev => ({ ...prev, time }))}
              defaultValue={meal.time}
            />
          </DateTimeContainer>

          <IsOnDietToggle
            title={i18n.t('pages.newMeal.isOnDiet')}
            buttonTitles={[i18n.t('pages.newMeal.yes'), i18n.t('pages.newMeal.no')]}
            onChange={isOnDiet => setMeal(prev => ({ ...prev, isOnDiet }))}
            defaultValue={meal.isOnDiet}
          />
        </Form>

        <Button
          title={isEditMode ? i18n.t('pages.newMeal.save') : i18n.t('pages.newMeal.register')}
          style={{ marginVertical: 24 }}
          onPress={() => handleSubmitMeal()}
        />
      </Content>
    </Container>
  )
};
