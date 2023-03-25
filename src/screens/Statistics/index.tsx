import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { PercentageText } from '@components/PercentageText';
import { StatisticsCard } from '@components/StatisticsCard';
import { Container, OnAndOffDietContainer, StatisticsCardsContainer, StatisticsTitle } from './styles';
import { useStatistics } from '@hooks/useStatistics';

export const Statistics = () => {
  const navigation = useNavigation();

  const { percentageOnDiet, colorSchemeType, isAcceptable, bestStreak, mealsCount } = useStatistics();

  function handleGoToHome() {
    navigation.goBack();
  }
  return (
    <Container type={colorSchemeType}>
      <Header backButtonColor={isAcceptable ? 'GREEN' : 'RED'} noMargin style={{ paddingHorizontal: 24 }} onBackPress={handleGoToHome} />
      <PercentageText percentageValue={percentageOnDiet} />
      <StatisticsCardsContainer>
        <StatisticsTitle>
          Estatísticas gerais
        </StatisticsTitle>

        <StatisticsCard value={bestStreak} description='melhor sequência de pratos dentro da dieta' />
        <StatisticsCard value={mealsCount.totalMeals} description='refeições registradas' />

        <OnAndOffDietContainer>

          <StatisticsCard value={mealsCount.mealsOnDiet} description="refeições dentro da dieta" type='GREEN' />
          <StatisticsCard value={mealsCount.mealsOffDiet} description="refeições fora da dieta" type='RED' />

        </OnAndOffDietContainer>

      </StatisticsCardsContainer>
    </Container>
  )
};
