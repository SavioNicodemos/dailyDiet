import { useState, useCallback } from 'react';
import { Alert, SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { PercentageText } from '@components/PercentageText';
import { Button } from '@components/Button';
import { MealListItem } from '@components/MealListItem';
import { ListEmpty } from '@components/ListEmpty';
import Logo from '@assets/Logo.svg';

import { AppLogo, AvatarPicture, BottomGradient, Container, GoToStatisticsButton, GoToStatisticsIcon, HomeHeader, MealDateText, MealListContainer, MealsPercentageContainer, MealTitle, TopGradient } from './styles';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { AllMealsDTO } from 'src/@dtos/MealDTO';
import { Loading } from '@components/Loading';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<AllMealsDTO>([]);
  const navigation = useNavigation();

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  async function fetchAllMeals() {
    try {
      setIsLoading(true);
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      console.warn(error)
      Alert.alert('Refeições', 'Não foi possivel recuperar as refeições');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchAllMeals();
  }, []));

  return (
    <Container>

      <HomeHeader>
        <AppLogo source={Logo} />
        <AvatarPicture source={Logo} />
      </HomeHeader>

      <MealsPercentageContainer>
        <GoToStatisticsButton onPress={handleGoToStatistics}>
          <GoToStatisticsIcon />
        </GoToStatisticsButton>
        <PercentageText percentageValue={90.865} style={{ marginTop: -20 }} />
      </MealsPercentageContainer>

      <MealListContainer>
        <MealTitle>
          Refeições
        </MealTitle>

        <Button
          onPress={() => navigation.navigate('newMeal')}
          icon='plus'
          title='Nova refeição'
        />

        <TopGradient />
        {isLoading ?
          <Loading />
          :
          <SectionList
            sections={meals}
            style={{ paddingTop: 24, flex: 1 }}
            keyExtractor={(item, index) => item.name + index}
            renderSectionHeader={({ section: { date } }) => (
              <MealDateText>{date}</MealDateText>
            )}
            renderItem={({ item }) => (
              <MealListItem time={item.time} name={item.name} isOnDiet={item.isOnDiet} />
            )}
            ListEmptyComponent={<ListEmpty message='Sem refeições adicionadas ainda. Que tal adicionar alguma para começar?' />}
            contentContainerStyle={meals.length === 0 ? { flex: 1 } : { paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        }
        <BottomGradient />

      </MealListContainer>
    </Container>
  )
};
