import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import uuid from "react-native-uuid";
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { MealSectionListDTO, MealDTO, MealWithIdDTO } from 'src/@dtos/MealDTO';
import { mealSave } from '@storage/meals/mealSave';
import { getTimestamp } from '@utils/dates';

type Props = {
  children?: ReactNode;
};

type MealsContextData = {
  loading: boolean;
  meals: MealWithIdDTO[];
  mealsBySection: MealSectionListDTO;
  storeMeal: (meal: MealDTO) => void;
  findMealById: (id: string) => MealDTO | null;
  deleteMeal: (id: string) => Promise<void>;
  updateMeal: (meal: MealWithIdDTO) => Promise<void>;
}

const MealsContext = createContext<MealsContextData>({} as MealsContextData);

const MealsProvider = ({ children }: Props) => {
  const [meals, setMeals] = useState<MealWithIdDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const mealsBySection: MealSectionListDTO = useMemo(() => {
    if (!meals.length) return [];
    console.log('meals', meals);
    const sortedList = meals.sort((a, b) => getTimestamp(b) - getTimestamp(a));

    const groupedList: MealSectionListDTO = [];

    sortedList.forEach((item) => {
      const existingGroup = groupedList.find((group) => group.date === item.date);

      if (existingGroup) {
        existingGroup.data.push(item);
      } else {
        groupedList.push({
          date: item.date,
          data: [item],
        });
      }
    });

    return groupedList;
  }, [meals]);

  const storeMeal = useCallback(async (meal: MealDTO) => {
    const newMealToAdd: MealWithIdDTO = { ...meal, id: JSON.stringify(uuid.v4()) };
    const updatedMeals = [...meals, newMealToAdd];

    await mealSave(updatedMeals);

    setMeals(updatedMeals);
  }, [meals]);

  const findMealById = useCallback((id: string): MealWithIdDTO | null => {
    const foundMeal = meals.find(meal => meal.id === id) || null;
    return foundMeal;
  }, [meals]);

  const deleteMeal = useCallback(async (id: string) => {
    const updatedMeals = meals.filter(meal => meal.id !== id);
    await mealSave(updatedMeals);
    setMeals(updatedMeals);
  }, [meals]);

  const updateMeal = useCallback(async (meal: MealWithIdDTO) => {
    try {
      if (!meal.id) throw new Error('Meal id not found');

      const updatedMeals = [...meals];
      const mealIndex = updatedMeals.findIndex(mealItem => mealItem.id === meal.id);

      if (mealIndex < 0) throw new Error('Meal not found');

      updatedMeals[mealIndex] = meal;
      await mealSave(updatedMeals);

      setMeals(updatedMeals);
    } catch (error) {
      throw error;
    }
  }, [meals]);

  useEffect(() => {
    async function loadStoragedData() {
      const getMeals = await mealsGetAll();
      setMeals(getMeals)

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <MealsContext.Provider
      value={{ loading, meals, mealsBySection, storeMeal, findMealById, deleteMeal, updateMeal }}
    >
      {children}
    </MealsContext.Provider>
  );
};

function useMeals() {
  const context = useContext(MealsContext);

  if (!context) {
    throw new Error('useMeals must be used within an MealsProvider');
  }

  return context;
}

export { MealsProvider, useMeals };
