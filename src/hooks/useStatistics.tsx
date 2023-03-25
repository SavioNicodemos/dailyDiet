import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { AllMealsDTO } from 'src/@dtos/MealDTO';
import { getMaximumStreak, getMealsOnOffDiet, isTolerable } from '@utils/statistics';
import { useMeals } from './useMeals';

type Props = {
  children?: ReactNode;
};

type MealsCount = {
  totalMeals: number,
  mealsOnDiet: number,
  mealsOffDiet: number,
}

type StatisticsContextData = {
  mealsCount: MealsCount;
  percentageOnDiet: number;
  isAcceptable: boolean;
  colorSchemeType: 'PRIMARY' | 'SECONDARY';
  bestStreak: number;
}

const StatisticsContext = createContext<StatisticsContextData>({} as StatisticsContextData);

const StatisticsProvider = ({ children }: Props) => {
  const { meals } = useMeals();

  const mealsCount = useMemo(() => {
    const [totalMeals, mealsOnDiet, mealsOffDiet] = getMealsOnOffDiet(meals);
    return {
      totalMeals,
      mealsOnDiet,
      mealsOffDiet,
    }
  }, [meals]);

  const percentageOnDiet = useMemo(() => {
    if (mealsCount.totalMeals === 0) {
      return 0;
    }
    return (mealsCount.mealsOnDiet / mealsCount.totalMeals) * 100;
  }, [mealsCount]);

  const isAcceptable = useMemo(() => {
    return isTolerable(percentageOnDiet)
  }, [percentageOnDiet]);

  const colorSchemeType = useMemo(() => {
    if (isAcceptable) {
      return 'PRIMARY';
    }
    return 'SECONDARY';
  }, [percentageOnDiet]);

  const bestStreak = useMemo(() => {
    if (!meals.length) {
      return 0;
    }
    return getMaximumStreak(meals);
  }, [meals]);

  return (
    <StatisticsContext.Provider
      value={{ mealsCount, percentageOnDiet, isAcceptable, colorSchemeType, bestStreak }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

function useStatistics() {
  const context = useContext(StatisticsContext);

  if (!context) {
    throw new Error('useStatistics must be used within an StatisticsProvider');
  }

  return context;
}

export { StatisticsProvider, useStatistics };
