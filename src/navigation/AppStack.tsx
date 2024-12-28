import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME, INDICATOR_LIST } from '../constants/screens';
import { HomeScreen, IndicatorListScreen } from '../screens';

export type RootStackParamList = {
  [HOME]: undefined;
};

export const AppStack = createNativeStackNavigator({
  screens: {
    [HOME]: {
      screen: HomeScreen,
      options: {
        title: '',
      },
    },
    [INDICATOR_LIST]: {
      screen: IndicatorListScreen,
      options: {
        title: '',
      },
    },
  },
});
