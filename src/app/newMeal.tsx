import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { Button } from "@components/Button";
import { DateTimeInput } from "@components/DateTimeInput";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { IsOnDietToggle } from "@components/IsOnDietToggle";

import { useMeals } from "@hooks/useMeals";
import { i18n } from "@langs/i18n";
import { Container, Content, DateTimeContainer } from "@theme/pages/newMeal";
import { MealDTO, MealWithIdDTO } from "src/@dtos/MealDTO";

type AddUpdateMeal = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet?: boolean;
};

type RouteParams = {
  id?: string;
};

const NewMeal = () => {
  const [meal, setMeal] = useState<AddUpdateMeal>({
    id: undefined,
    name: "",
    description: "",
    date: "",
    time: "",
    isOnDiet: undefined,
  });

  const isEditMode = !!meal?.id;

  const { storeMeal, findMealById, updateMeal } = useMeals();

  const { id } = useLocalSearchParams<RouteParams>();

  function handleGoBack() {
    router.back();
  }

  async function handleSubmitMeal() {
    try {
      if (meal.isOnDiet === undefined) {
        return Alert.alert(
          i18n.t("errors.invalid"),
          i18n.t("errors.fillAllFields")
        );
      }

      const isValid = meal.name && meal.description && meal.date && meal.time;
      if (!isValid) {
        return Alert.alert(
          i18n.t("errors.invalid"),
          i18n.t("errors.fillAllFields")
        );
      }

      if (isEditMode) {
        await updateMeal(meal as MealWithIdDTO);
        router.push({
          pathname: "/viewMeal",
          params: { id: (meal as MealWithIdDTO).id },
        });
        return;
      }

      await storeMeal(meal as MealDTO);
      router.push({
        pathname: "/finishedRegistration",
        params: { onDiet: meal.isOnDiet ? "true" : "false" },
      });
    } catch (error) {
      Alert.alert(i18n.t("errors.newMeal"), i18n.t("errors.createNewMeal"));
    }
  }

  useEffect(() => {
    if (id) {
      const meal = findMealById(id);
      if (meal) {
        setMeal(meal);
      }
    }
  }, [id]);

  return (
    <Container>
      <Header
        title={
          isEditMode
            ? i18n.t("pages.newMeal.editMeal")
            : i18n.t("pages.newMeal.newMeal")
        }
        onBackPress={handleGoBack}
        style={{ paddingHorizontal: 24 }}
      />

      <Content>
        <Input
          title={i18n.t("pages.newMeal.name")}
          onChangeText={(name) => setMeal((prev) => ({ ...prev, name }))}
          defaultValue={meal.name}
        />

        <Input
          title={i18n.t("pages.newMeal.description")}
          multiline
          numberOfLines={5}
          onChangeText={(description) =>
            setMeal((prev) => ({ ...prev, description }))
          }
          defaultValue={meal.description}
        />

        <DateTimeContainer>
          <DateTimeInput
            title={i18n.t("pages.newMeal.date")}
            mode="date"
            onDateChange={(date) => setMeal((prev) => ({ ...prev, date }))}
            defaultValue={meal.date}
          />
          <DateTimeInput
            title={i18n.t("pages.newMeal.time")}
            mode="time"
            onDateChange={(time) => setMeal((prev) => ({ ...prev, time }))}
            defaultValue={meal.time}
          />
        </DateTimeContainer>

        <IsOnDietToggle
          title={i18n.t("pages.newMeal.isOnDiet")}
          buttonTitles={[
            i18n.t("pages.newMeal.yes"),
            i18n.t("pages.newMeal.no"),
          ]}
          onChange={(isOnDiet) => setMeal((prev) => ({ ...prev, isOnDiet }))}
          defaultValue={meal.isOnDiet}
        />

        <View style={{ flex: 1 }} />

        <Button
          title={
            isEditMode
              ? i18n.t("pages.newMeal.save")
              : i18n.t("pages.newMeal.register")
          }
          style={{ marginVertical: 24 }}
          onPress={() => handleSubmitMeal()}
        />
      </Content>
    </Container>
  );
};

export default NewMeal;
