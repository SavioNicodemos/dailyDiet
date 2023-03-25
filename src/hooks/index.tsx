import { ReactNode } from "react";
import { StatisticsProvider } from "./useStatistics";
import { MealsProvider } from "./useMeals";

type Props = {
  children?: ReactNode;
};

const AppProvider = ({ children }: Props) => (
  <MealsProvider>
    <StatisticsProvider>
      {children}
    </StatisticsProvider>
  </MealsProvider>
);

export { AppProvider };
