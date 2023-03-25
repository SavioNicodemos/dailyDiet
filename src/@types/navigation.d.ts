export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: {
        id?: string;
      };
      finishedRegistration: {
        isOnDiet: boolean;
      };
      viewMeal: {
        id: string;
      };
    }
  }
}
