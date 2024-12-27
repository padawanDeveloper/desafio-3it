import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

import { ROOT, TOUR } from '../constants/screens';
import { AppStack } from './AppStack';

export type AppStackParamList = {
  [ROOT]: undefined;
  [TOUR]: undefined;
};

function TourScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tour Screen</Text>
    </View>
  );
}

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
