import { useNavigation, useRoute } from '@react-navigation/native';

import HappyWoman from '@assets/HappyWoman.svg';
import SadMan from '@assets/SadMan.svg';
import { Button } from '@components/Button';
import { BoldText, Container, Illustration, Subtitle, TextsContainer, Title } from './styles';
import { i18n } from '@langs/i18n';

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
        <Title
          type={isOnDiet ? "PRIMARY" : "SECONDARY"}
        >
          {isOnDiet ? i18n.t("pages.finishedRegistration.positive.title"): i18n.t("pages.finishedRegistration.negative.title")}
        </Title>
        {isOnDiet ?
          <Subtitle>
            {i18n.t("pages.finishedRegistration.positive.firstMessage")}
            <BoldText> {i18n.t("pages.finishedRegistration.positive.boldText")} </BoldText>
            {i18n.t("pages.finishedRegistration.positive.lastMessage")}
          </Subtitle>
          :
          <Subtitle>
            {i18n.t("pages.finishedRegistration.negative.firstMessage")}
            <BoldText> {i18n.t("pages.finishedRegistration.negative.boldText")} </BoldText>
            {i18n.t("pages.finishedRegistration.negative.lastMessage")}
          </Subtitle>
        }
      </TextsContainer>
      <Illustration source={isOnDiet ? HappyWoman : SadMan} />
      <Button title={i18n.t("pages.finishedRegistration.goToHome")} onPress={() => handleGoToHome()} />
    </Container>
  )
};
