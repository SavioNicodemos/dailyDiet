import { Alert, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '@assets/Logo.svg';
import Avatar from '@assets/ForkKnife.svg';

import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { MealListItem } from '@components/MealListItem';
import { PercentageText } from '@components/PercentageText';

import { useMeals } from '@hooks/useMeals';
import { useStatistics } from '@hooks/useStatistics';

import {
  AppLogo,
  AvatarPicture,
  BottomGradient,
  Container,
  GoToStatisticsButton,
  GoToStatisticsIcon,
  HomeHeader,
  MealDateText,
  MealListContainer,
  MealsPercentageContainer,
  MealTitle,
  TopGradient
} from './styles';
import { i18n } from '@langs/i18n';

export const Home = () => {
  const { percentageOnDiet, colorSchemeType } = useStatistics();

  const { meals, loading: isLoading } = useMeals();
  const navigation = useNavigation();

  function handleViewMeal(id: string | undefined) {
    if (id) {
      return navigation.navigate('viewMeal', { id: id })
    }
    return Alert.alert(i18n.t('pages.home.meal'), i18n.t('pages.home.noValidId'));
  }

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  return (
    <Container>

      <HomeHeader>
        <AppLogo source={Logo} />
        <AvatarPicture source={Avatar} />
      </HomeHeader>

      <MealsPercentageContainer type={colorSchemeType}>
        <GoToStatisticsButton onPress={handleGoToStatistics}>
          <GoToStatisticsIcon type={colorSchemeType} />
        </GoToStatisticsButton>
        <PercentageText percentageValue={percentageOnDiet} style={{ marginTop: -20 }} />
      </MealsPercentageContainer>

      <MealListContainer>
        <MealTitle>
          {i18n.t('pages.home.meals')}
        </MealTitle>

        <Button
          onPress={() => navigation.navigate('newMeal', {})}
          icon='plus'
          title={i18n.t('pages.home.newMeal')}
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
              <MealListItem time={item.time} name={item.name} isOnDiet={item.isOnDiet} onPress={() => handleViewMeal(item.id)} />
            )}
            ListEmptyComponent={<ListEmpty message={i18n.t('pages.home.noAddedMeals')} />}
            contentContainerStyle={meals.length === 0 ? { flex: 1 } : { paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        }
        <BottomGradient />

      </MealListContainer>
    </Container>
  )
};
