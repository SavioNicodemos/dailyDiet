import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionListDTO } from "src/@dtos/MealDTO";

export async function mealDestroy(receivedMeals: MealSectionListDTO, mealId: string) {
  try {
    const meals = [...receivedMeals];

    for (let i = 0; i < meals.length; i++) {
      const index = meals[i].data.findIndex((meal) => meal.id === mealId);

      if (index > -1) {
        meals[i].data.splice(index, 1);

        if (meals[i].data.length === 0) {
          meals.splice(i, 1);
        }

        break;
      }
    }

    const storage = JSON.stringify(meals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    return meals;
  } catch (error) {
    throw error;
  }
}
