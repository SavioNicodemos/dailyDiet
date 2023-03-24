import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import HappyWoman from '@assets/HappyWoman.svg';
import SadMan from '@assets/SadMan.svg';
import { Button } from '@components/Button';
import { BoldText, Container, Illustration, Subtitle, TextsContainer, Title } from './styles';

type RouteParams = {
  isOnDiet: boolean;
}

export const FinishedRegistration = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { isOnDiet = false } = route.params as RouteParams;

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <TextsContainer>
        <Title type={isOnDiet ? "PRIMARY" : "SECONDARY"}>{isOnDiet ? "Continue assim!" : "Que pena!"}</Title>
        {isOnDiet ?
          <Subtitle>
            Você continua
            <BoldText> dentro da dieta. </BoldText>
            Muito bem!
          </Subtitle>
          :
          <Subtitle>
            Você
            <BoldText> saiu da dieta </BoldText>
            dessa vez, mas continue se esforçando e não desista!
          </Subtitle>
        }
      </TextsContainer>
      <Illustration source={isOnDiet ? HappyWoman : SadMan} />
      <Button title='Ir para a página inicial' onPress={() => handleGoToHome()} />
    </Container>
  )
};
