import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionDTO, MealWithIdDTO } from "src/@dtos/MealDTO";

export async function mealsGetAll(): Promise<MealWithIdDTO[]> {
  try {
    const mealsStringify = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (!mealsStringify) {
      return [];
    }
    let meals = JSON.parse(mealsStringify);
    if (meals.length > 0 && !!meals[0]?.data) {
      const mealsArray = meals.reduce(
        (acc: MealWithIdDTO[], curr: MealSectionDTO) => {
          return [...acc, ...curr.data];
        },
        []
      );
      meals = mealsArray;
    }
    return meals;
  } catch (error) {
    throw error;
  }
}
