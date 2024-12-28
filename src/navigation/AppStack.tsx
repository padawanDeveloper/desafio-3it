import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME } from '../constants/screens';
import { HomeScreen } from '../screens';

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
  },
});
