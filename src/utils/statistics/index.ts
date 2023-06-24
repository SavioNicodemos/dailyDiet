import { MealWithIdDTO } from "src/@dtos/MealDTO";

export function getMaximumStreak(meals: MealWithIdDTO[]) {
  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    if (meal.isOnDiet) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return maxStreak;
}

export function getMealsOnOffDiet(meals: MealWithIdDTO[]) {
  let allMeals = 0;
  let mealsOnDiet = 0;
  let mealsOffDiet = 0;

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    if (meal.isOnDiet) {
      mealsOnDiet++;
      allMeals++;
    } else {
      mealsOffDiet++;
      allMeals++;
    }
  }

  return [allMeals, mealsOnDiet, mealsOffDiet];
}

export function isTolerable(percentage: number) {
  if (percentage >= 75) {
    return true;
  }
  return false;
}
