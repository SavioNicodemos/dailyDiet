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

type Props = {
  children?: ReactNode;
};

type MealsContextData = {
  loading: boolean;
  meals: AllMealsDTO;
  storeMeal: (meal: MealDTO) => void;
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
      value={{ loading, meals, storeMeal }}
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
