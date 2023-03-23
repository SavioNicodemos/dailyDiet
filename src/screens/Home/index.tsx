import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PercentageText } from '@components/PercentageText';
import { Button } from '@components/Button';
import { MealListItem } from '@components/MealListItem';
import { ListEmpty } from '@components/ListEmpty';
import Logo from '@assets/Logo.svg';

import { AppLogo, AvatarPicture, BottomGradient, Container, GoToStatisticsButton, GoToStatisticsIcon, HomeHeader, MealDateText, MealListContainer, MealsPercentageContainer, MealTitle, TopGradient } from './styles';

export const Home = () => {
  const navigation = useNavigation();

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

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
        <Button icon='plus' title='Nova refeição' />

        <TopGradient />
        <SectionList
          sections={meals}
          style={{ paddingTop: 24, flex: 1 }}
          keyExtractor={(item, index) => item.meal + index}
          renderSectionHeader={({ section: { date } }) => (
            <MealDateText>{date}</MealDateText>
          )}
          renderItem={({ item }) => (
            <MealListItem time={item.time} name={item.meal} isOnDiet={item.isOnDiet} />
          )}
          ListEmptyComponent={<ListEmpty message='Sem refeições adicionadas ainda. Que tal adicionar alguma para começar?' />}
          contentContainerStyle={meals.length === 0 ? { flex: 1 } : { paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
        />
        <BottomGradient />

      </MealListContainer>
    </Container>
  )
};

const meals = [
  {
    date: '21.03.2023',
    data: [
      {
        time: '20:00',
        meal: 'X-Tudo',
        isOnDiet: false
      },
      {
        time: '15:00',
        meal: 'Whey Protein com leite',
        isOnDiet: true
      },
      {
        time: '12:00',
        meal: 'Salada Caesar com frango cozido desfiado',
        isOnDiet: true
      },
      {
        time: '07:00',
        meal: 'Bacon com ovo frito e pães',
        isOnDiet: false
      },
    ],
  },
  {
    date: '20.03.2023',
    data: [
      {
        time: '20:00',
        meal: 'X-Tudo',
        isOnDiet: true
      },
      {
        time: '15:00',
        meal: 'X-Tudo',
        isOnDiet: false
      },
      {
        time: '12:00',
        meal: 'X-Tudo',
        isOnDiet: false
      },
      {
        time: '07:00',
        meal: 'X-Tudo',
        isOnDiet: true
      },
    ],
  },
  {
    date: '19.03.2023',
    data: [
      {
        time: '20:00',
        meal: 'X-Tudo',
        isOnDiet: true
      },
      {
        time: '15:00',
        meal: 'X-Tudo',
        isOnDiet: false
      },
      {
        time: '12:00',
        meal: 'X-Tudo',
        isOnDiet: false
      },
      {
        time: '07:00',
        meal: 'X-Tudo',
        isOnDiet: true
      },
    ],
  },
];
