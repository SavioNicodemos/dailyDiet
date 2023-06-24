import { MealWithIdDTO } from "src/@dtos/MealDTO";

export function getMaximumStreak(meals: MealWithIdDTO[]) {
  let maxStreak = 0;
  let currentStreak = 0;

  meals.forEach((meal) => {
    if (meal.isOnDiet) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  });

  return maxStreak;
}

export function getMealsOnOffDiet(meals: MealWithIdDTO[]) {
  let mealsOnDiet = 0;
  let mealsOffDiet = 0;

  meals.forEach((meal) => {
    if (meal.isOnDiet) {
      mealsOnDiet++;
    } else {
      mealsOffDiet++;
    }
  });

  return [meals.length, mealsOnDiet, mealsOffDiet];
}

export function isTolerable(percentage: number) {
  if (percentage >= 75) {
    return true;
  }
  return false;
}
