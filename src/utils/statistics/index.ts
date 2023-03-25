import { AllMealsDTO } from "src/@dtos/MealDTO";

export function getMaximumStreak(meals: AllMealsDTO) {
  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < meals.length; i++) {
    const dateData = meals[i].data;
    for (let j = 0; j < dateData.length; j++) {
      const meal = dateData[j];
      if (meal.isOnDiet) {
        currentStreak++;
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    }
  }

  return maxStreak;
}

export function getMealsOnOffDiet(meals: AllMealsDTO) {
  let allMeals = 0;
  let mealsOnDiet = 0;
  let mealsOffDiet = 0;

  for (let i = 0; i < meals.length; i++) {
    const dateData = meals[i].data;
    for (let j = 0; j < dateData.length; j++) {
      const meal = dateData[j];
      if (meal.isOnDiet) {
        mealsOnDiet++;
        allMeals++;
      } else {
        mealsOffDiet++;
        allMeals++;
      }
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
