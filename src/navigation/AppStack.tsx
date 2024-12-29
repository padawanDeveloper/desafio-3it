import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME, INDICATOR_LIST } from '../constants/screens';
import { HomeScreen, IndicatorListScreen } from '../screens';

export type RootStackParamList = {
  [HOME]: undefined;
  [INDICATOR_LIST]: {
    id: string;
  };
};

export const AppStack = createNativeStackNavigator({
  initialRouteName: HOME,
  screens: {
    [HOME]: {
      screen: HomeScreen,
      options: {
        title: 'Indicadores',
      },
    },
    [INDICATOR_LIST]: {
      screen: IndicatorListScreen,
      options: {
        title: '',
        headerBackTitle: 'Indicadores',
      },
    },
  },
});
