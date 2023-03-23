import { Header } from '@components/Header';
import { PercentageText } from '@components/PercentageText';
import { StatisticsCard } from '@components/StatisticsCard';
import { Container, OnAndOffDietContainer, StatisticsCardsContainer, StatisticsTitle } from './styles';

export const Statistics = () => {
  return (
    <Container>
      <Header backButtonColor='RED' noMargin style={{ paddingHorizontal: 24 }} onBackPress={() => console.log('Oi, caramba')} />
      <PercentageText percentageValue={30.5} />
      <StatisticsCardsContainer>
        <StatisticsTitle>
          Estatísticas gerais
        </StatisticsTitle>

        <StatisticsCard value={4} description='melhor sequência de pratos dentro da dieta' />
        <StatisticsCard value={109} description='refeições registradas' />

        <OnAndOffDietContainer>

          <StatisticsCard value={32} description="refeições dentro da dieta" type='GREEN' />
          <StatisticsCard value={77} description="refeições fora da dieta" type='RED' />

        </OnAndOffDietContainer>

      </StatisticsCardsContainer>
    </Container>
  )
};
