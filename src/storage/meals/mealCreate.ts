import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { parse, compareDesc } from "date-fns";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/@dtos/MealDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const getMeals = await mealsGetAll();

    const meals = [...getMeals];

    const index = meals.findIndex((meal) => meal.date === newMeal.date);

    const newMealToAdd = { id: JSON.stringify(uuid.v4()), ...newMeal };

    if (index > -1) {
      meals[index].data.push(newMealToAdd);
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
  } catch (error) {
    throw error;
  }
}
