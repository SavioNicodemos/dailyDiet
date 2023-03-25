import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { AllMealsDTO, MealDTO } from 'src/@dtos/MealDTO';
import { mealCreate } from '@storage/meals/mealCreate';
import { mealDestroy } from '@storage/meals/mealDestroy';

type Props = {
  children?: ReactNode;
};

type MealsContextData = {
  loading: boolean;
  meals: AllMealsDTO;
  storeMeal: (meal: MealDTO) => void;
  findMealById: (id: string) => MealDTO | null;
  deleteMeal: (id: string) => Promise<void>;
  updateMeal: (meal: MealDTO) => Promise<void>;
}

const MealsContext = createContext<MealsContextData>({} as MealsContextData);

const MealsProvider = ({ children }: Props) => {
  const [meals, setMeals] = useState<AllMealsDTO>([]);
  const [loading, setLoading] = useState(true);

  const storeMeal = useCallback(async (meal: MealDTO) => {
    try {
      const updatedMeals = await mealCreate(meal);
      setMeals(updatedMeals);
    } catch (error) {
      throw error;
    }
  }, [meals]);

  const findMealById = useCallback((id: string) => {
    let foundMeal = null;
    for (const date of meals) {
      for (const meal of date.data) {
        if (meal.id === id) {
          foundMeal = meal;
          break;
        }
      }
      if (foundMeal !== null) {
        break;
      }
    }
    return foundMeal;
  }, [meals]);

  const deleteMeal = useCallback(async (id: string) => {
    try {
      const updatedMeals = await mealDestroy(id);
      setMeals(updatedMeals);
    } catch (error) {
      throw error;
    }
  }, [meals]);

  const updateMeal = useCallback(async (meal: MealDTO) => {
    try {
      if (meal.id)
        await mealDestroy(meal.id);

      const updatedMeals = await mealCreate(meal);

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
      value={{ loading, meals, storeMeal, findMealById, deleteMeal, updateMeal }}
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
