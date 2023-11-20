import { Header } from '@components/Header';
import { PercentageText } from '@components/PercentageText';
import { StatisticsCard } from '@components/StatisticsCard';
import { useStatistics } from '@hooks/useStatistics';
import { i18n } from '@langs/i18n';
import { router } from 'expo-router';
import { Container, OnAndOffDietContainer, StatisticsCardsContainer, StatisticsTitle } from './(styles)';

const Statistics = () => {
  const { percentageOnDiet, colorSchemeType, isAcceptable, bestStreak, mealsCount } = useStatistics();

  function handleGoToHome() {
    router.back();
  }

  return (
    <Container type={colorSchemeType}>
      <Header
        backButtonColor={isAcceptable ? 'GREEN' : 'RED'}
        noMargin
        style={{ paddingHorizontal: 24 }}
        onBackPress={handleGoToHome}
      />
      <PercentageText percentageValue={percentageOnDiet} />
      <StatisticsCardsContainer>
        <StatisticsTitle>
          {i18n.t('pages.statistics.title')}
        </StatisticsTitle>

        <StatisticsCard
          value={bestStreak}
          description={i18n.t('pages.statistics.streak')}
        />
        <StatisticsCard
          value={mealsCount.totalMeals}
          description={i18n.t('pages.statistics.registered')}
        />

        <OnAndOffDietContainer>

          <StatisticsCard
            value={mealsCount.mealsOnDiet}
            description={i18n.t('pages.statistics.onDiet')}
            type='GREEN'
          />
          <StatisticsCard
            value={mealsCount.mealsOffDiet}
            description={i18n.t('pages.statistics.offDiet')}
            type='RED'
          />

        </OnAndOffDietContainer>

      </StatisticsCardsContainer>
    </Container>
  )
};

export default Statistics;
