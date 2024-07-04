import { useRouter } from 'expo-router';
import { Alert, SectionList } from 'react-native';

import Avatar from '@assets/ForkKnife.svg';
import Logo from '@assets/Logo.svg';

import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { MealListItem } from '@components/MealListItem';
import { PercentageText } from '@components/PercentageText';

import { useMeals } from '@hooks/useMeals';
import { useStatistics } from '@hooks/useStatistics';

import { i18n } from '@langs/i18n';
import {
  AppLogo,
  AvatarPicture,
  BottomGradient,
  Container,
  GoToStatisticsContainer,
  GoToStatisticsIcon,
  HomeHeader,
  MealDateText,
  MealListContainer,
  MealsPercentageContainer,
  MealTitle,
  TopGradient
} from './(styles)';

const Home = () => {
  const { percentageOnDiet, colorSchemeType } = useStatistics();

  const { mealsBySection, loading: isLoading } = useMeals();

  const router = useRouter();

  function handleViewMeal(id: string | undefined) {
    if (id) {
      return router.push({ pathname: '/viewMeal', params: { id: id } })
    }
    return Alert.alert(i18n.t('pages.home.meal'), i18n.t('pages.home.noValidId'));
  }

  function handleGoToStatistics() {
    router.push('/statistics');
  }

  return (
    <Container>

      <HomeHeader>
        <AppLogo source={Logo} />
        <AvatarPicture source={Avatar} />
      </HomeHeader>

      <MealsPercentageContainer type={colorSchemeType} onPress={handleGoToStatistics} activeOpacity={0.7}>
        <GoToStatisticsContainer>
          {/* @ts-ignore */}
          <GoToStatisticsIcon type={colorSchemeType} />
        </GoToStatisticsContainer>
        <PercentageText percentageValue={percentageOnDiet} style={{ marginTop: -20 }} />
      </MealsPercentageContainer>

      <MealListContainer>
        <MealTitle>
          {i18n.t('pages.home.meals')}
        </MealTitle>

        <Button
          onPress={() => router.push('/newMeal')}
          icon='plus'
          title={i18n.t('pages.home.newMeal')}
        />

        {/* @ts-ignore */}
        <TopGradient />
        {isLoading ?
          <Loading />
          :
          <SectionList
            sections={mealsBySection}
            style={{ paddingTop: 24, flex: 1 }}
            keyExtractor={(item, index) => item.name + index}
            renderSectionHeader={({ section: { date } }) => (
              <MealDateText>{date}</MealDateText>
            )}
            renderItem={({ item }) => (
              <MealListItem time={item.time} name={item.name} isOnDiet={item.isOnDiet} onPress={() => handleViewMeal(item.id)} />
            )}
            ListEmptyComponent={<ListEmpty message={i18n.t('pages.home.noAddedMeals')} />}
            contentContainerStyle={mealsBySection.length === 0 ? { flex: 1 } : { paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        }
        {/* @ts-ignore */}
        <BottomGradient />

      </MealListContainer>
    </Container>
  )
};

export default Home;
