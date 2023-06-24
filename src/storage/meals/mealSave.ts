import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealWithIdDTO } from "src/@dtos/MealDTO";

export async function mealSave(
  receivedMeals: MealWithIdDTO[],
) {
  const meals = [...receivedMeals];

  const storage = JSON.stringify(meals);
  await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  return true;
}
