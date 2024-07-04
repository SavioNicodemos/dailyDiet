import HappyWoman from "@assets/HappyWoman.svg";
import SadMan from "@assets/SadMan.svg";
import { Button } from "@components/Button";
import { i18n } from "@langs/i18n";
import {
  BoldText,
  Container,
  Illustration,
  Subtitle,
  TextsContainer,
  Title,
} from "@theme/pages/finishedRegistration";
import { router, useLocalSearchParams } from "expo-router";

type RouteParams = {
  onDiet: string;
};

const FinishedRegistration = () => {
  const { onDiet = "false" } = useLocalSearchParams<RouteParams>();

  const isOnDiet = onDiet === "true";

  function handleGoToHome() {
    router.replace("/");
  }

  return (
    <Container>
      <TextsContainer>
        <Title type={isOnDiet ? "PRIMARY" : "SECONDARY"}>
          {isOnDiet
            ? i18n.t("pages.finishedRegistration.positive.title")
            : i18n.t("pages.finishedRegistration.negative.title")}
        </Title>
        {isOnDiet ? (
          <Subtitle>
            {i18n.t("pages.finishedRegistration.positive.firstMessage")}
            <BoldText>
              {" "}
              {i18n.t("pages.finishedRegistration.positive.boldText")}{" "}
            </BoldText>
            {i18n.t("pages.finishedRegistration.positive.lastMessage")}
          </Subtitle>
        ) : (
          <Subtitle>
            {i18n.t("pages.finishedRegistration.negative.firstMessage")}
            <BoldText>
              {" "}
              {i18n.t("pages.finishedRegistration.negative.boldText")}{" "}
            </BoldText>
            {i18n.t("pages.finishedRegistration.negative.lastMessage")}
          </Subtitle>
        )}
      </TextsContainer>
      <Illustration source={isOnDiet ? HappyWoman : SadMan} />
      <Button
        title={i18n.t("pages.finishedRegistration.goToHome")}
        onPress={() => handleGoToHome()}
      />
    </Container>
  );
};

export default FinishedRegistration;
