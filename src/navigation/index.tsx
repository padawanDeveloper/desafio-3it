import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

import { ROOT, TOUR } from '../constants/screens';
import { AppStack } from './AppStack';
import { TourScreen } from '../screens';

export type AppStackParamList = {
  [ROOT]: undefined;
  [TOUR]: undefined;
};

const AppNavigator = createNativeStackNavigator({
  screens: {
    [ROOT]: {
      screen: AppStack,
      options: {
        headerShown: false,
      },
    },
    [TOUR]: {
      screen: TourScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootNavigation = createStaticNavigation(AppNavigator);
export default RootNavigation;
