import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppStack';
import { indicatorList } from '../constants/indicators';

const useSetNavigationOptions = (id: string) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    navigation.setOptions({
      title: indicatorList[id].label,
    });
  }, [navigation]);
  return;
};

export default useSetNavigationOptions;
