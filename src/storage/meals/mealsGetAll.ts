import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionListDTO } from "src/@dtos/MealDTO";

export async function mealsGetAll(): Promise<MealSectionListDTO> {
  try {
    const mealsStringify = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (!mealsStringify) {
      return [];
    }
    const meals = JSON.parse(mealsStringify);
    return meals;
  } catch (error) {
    throw error;
  }
}
