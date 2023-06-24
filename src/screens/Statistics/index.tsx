import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { PercentageText } from '@components/PercentageText';
import { StatisticsCard } from '@components/StatisticsCard';
import { Container, OnAndOffDietContainer, StatisticsCardsContainer, StatisticsTitle } from './styles';
import { useStatistics } from '@hooks/useStatistics';
import { i18n } from '@langs/i18n';

export const Statistics = () => {
  const navigation = useNavigation();

  const { percentageOnDiet, colorSchemeType, isAcceptable, bestStreak, mealsCount } = useStatistics();

  function handleGoToHome() {
    navigation.goBack();
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
