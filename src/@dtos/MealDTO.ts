export type MealDTO = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export type MealWithIdDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export type MealSectionDTO = {
  date: string;
  data: MealWithIdDTO[];
};

export type MealSectionListDTO = MealSectionDTO[];
