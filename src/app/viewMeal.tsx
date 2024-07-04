import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Modal } from "@components/Modal";
import { useMeals } from "@hooks/useMeals";
import { i18n } from "@langs/i18n";
import {
  Container,
  Content,
  DateTitle,
  DatetimeText,
  Description,
  Footer,
  Indicator,
  ItemDetails,
  Name,
  OnDietContainer,
  OnDietText,
} from "@theme/pages/viewMeal";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

type RouteParams = {
  id: string;
};

const ViewMeal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { id } = useLocalSearchParams<RouteParams>();
  const { findMealById, deleteMeal } = useMeals();

  const selectedMeal = findMealById(id);

  const colorSchemeType = selectedMeal?.isOnDiet ? "PRIMARY" : "SECONDARY";

  async function handleDeleteMeal() {
    try {
      await deleteMeal(id);
      handleGoToHome();
    } catch (error) {
      Alert.alert(i18n.t("errors.meal"), i18n.t("errors.deleteMeal"));
    }
  }

  function handleEditMeal() {
    router.push({ pathname: "/newMeal", params: { id } });
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleGoToHome() {
    return router.replace("/");
  }
  return (
    <Container type={colorSchemeType}>
      <Header
        title={i18n.t("pages.viewMeal.meal")}
        onBackPress={handleGoToHome}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <ItemDetails>
          <Name>{selectedMeal?.name}</Name>

          <Description>{selectedMeal?.description}</Description>

          <DateTitle>{i18n.t("pages.viewMeal.dateAndTime")}</DateTitle>
          <DatetimeText>
            {selectedMeal?.date} {i18n.t("pages.viewMeal.at")}{" "}
            {selectedMeal?.time}
          </DatetimeText>

          <OnDietContainer>
            <Indicator type={colorSchemeType} />
            <OnDietText>
              {selectedMeal?.isOnDiet
                ? i18n.t("pages.viewMeal.onDiet")
                : i18n.t("pages.viewMeal.offDiet")}
            </OnDietText>
          </OnDietContainer>
        </ItemDetails>
        <Footer>
          <Button
            title={i18n.t("pages.viewMeal.editMeal")}
            icon="edit-3"
            onPress={handleEditMeal}
          />
          <Button
            type="SECONDARY"
            title={i18n.t("pages.viewMeal.deleteMeal")}
            icon="trash-2"
            onPress={handleOpenModal}
          />
        </Footer>
      </Content>
      <Modal
        visible={modalVisible}
        message={i18n.t("pages.viewMeal.confirmDelete")}
        onClose={handleCloseModal}
        onConfirm={handleDeleteMeal}
      />
    </Container>
  );
};

export default ViewMeal;
