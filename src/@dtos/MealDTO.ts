export type MealDTO = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

type MealObject = {
  date: string;
  data: MealDTO[];
};

export type AllMealsDTO = MealObject[];
