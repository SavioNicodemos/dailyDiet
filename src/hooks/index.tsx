import { ReactNode } from "react";
import { StatisticsProvider } from "./useStatistics";

type Props = {
  children?: ReactNode;
};

const AppProvider = ({ children }: Props) => (
  <StatisticsProvider>{children}</StatisticsProvider>
);

export { AppProvider };
