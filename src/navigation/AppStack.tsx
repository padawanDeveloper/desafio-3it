import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME } from '../constants/screens';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

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
