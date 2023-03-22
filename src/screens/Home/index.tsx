import { AppLogo, AvatarPicture, Container, GoToStatisticsIcon, HomeHeader, MealsPercentageContainer } from './styles';

import Logo from '@assets/Logo.svg';
import { PercentageText } from '@components/PercentageText';
import { Button } from '@components/Button';

export const Home = () => {
  return (
    <Container>
      <HomeHeader>
        <AppLogo source={Logo} />
        <AvatarPicture source={Logo} />
      </HomeHeader>
      <MealsPercentageContainer>
        <GoToStatisticsIcon />
        <PercentageText percentageValue={90.865} style={{ marginTop: -20 }} />
      </MealsPercentageContainer>
      <Button icon='plus' title='Nova refeição' />
    </Container>
  )
};
