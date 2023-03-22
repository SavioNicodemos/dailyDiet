import { AppLogo, AvatarPicture, Container, HomeHeader } from './styles';
import Logo from '@assets/Logo.svg';

export const Home = () => {
  return (
    <Container>
      <HomeHeader>
        <AppLogo source={Logo} />
        <AvatarPicture source={Logo} />
      </HomeHeader>
    </Container>
  )
};
