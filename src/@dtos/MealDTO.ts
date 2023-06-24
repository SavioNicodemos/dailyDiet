export type MealDTO = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

type MealSection = {
  date: string;
  data: MealDTO[];
};

export type MealSectionListDTO = MealSection[];
