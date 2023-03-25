import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FinishedRegistration } from '@screens/FinishedRegistration';

import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';
import { ViewMeal } from '@screens/ViewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>

      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='statistics'
        component={Statistics}
      />

      <Screen
        name='newMeal'
        component={NewMeal}
      />

      <Screen
        name='finishedRegistration'
        component={FinishedRegistration}
      />

      <Screen
        name='viewMeal'
        component={ViewMeal}
      />


    </Navigator>
  )
}
