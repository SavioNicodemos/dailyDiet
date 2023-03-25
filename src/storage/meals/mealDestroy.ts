import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealDestroy(mealId: string) {
  try {
    const getMeals = await mealsGetAll();

    const meals = [...getMeals];

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
