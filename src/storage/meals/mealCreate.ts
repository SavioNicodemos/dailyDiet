import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { parse, compareDesc } from "date-fns";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionListDTO, MealDTO } from "src/@dtos/MealDTO";

export async function mealCreate(receivedMeals: MealSectionListDTO, newMeal: MealDTO) {
  try {
    const meals = [...receivedMeals];

    const index = meals.findIndex((meal) => meal.date === newMeal.date);

    const newMealToAdd = { ...newMeal, id: JSON.stringify(uuid.v4()) };

    if (index > -1) {
      meals[index].data.push(newMealToAdd);

      const sortedMealsByTimeInDate = meals[index].data.sort((a, b) => {
        const dateA = parse(a.time, "HH:mm", new Date());
        const dateB = parse(b.time, "HH:mm", new Date());
        return compareDesc(dateA, dateB);
      });

      meals[index].data = sortedMealsByTimeInDate;
    } else {
      meals.push({
        date: newMealToAdd.date,
        data: [newMealToAdd],
      });
    }

    const sortedDates = meals.sort((a, b) => {
      const dateA = parse(a.date, "dd.MM.yyyy", new Date());
      const dateB = parse(b.date, "dd.MM.yyyy", new Date());
      return compareDesc(dateA, dateB);
    });

    const storage = JSON.stringify(sortedDates);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    return sortedDates;
  } catch (error) {
    throw error;
  }
}
