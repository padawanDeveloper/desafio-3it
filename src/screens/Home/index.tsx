import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { euro, dolar, uf, ipc, utm } from '../../constants/indicators';
import { Indicators } from '../../types/Indicator';
import ListItem from './components/IndicatorItem';
import { RootStackParamList } from '../../navigation/AppStack';
import { INDICATOR_LIST, INDICATOR_DETAIL } from '../../constants/screens';

const list = [
  {
    id: dolar.value,
    title: dolar.label,
    subtitle: dolar.unit,
  },
  {
    id: euro.value,
    title: euro.label,
    subtitle: euro.unit,
  },

  {
    id: ipc.value,
    title: ipc.label,
    subtitle: ipc.unit,
  },
  {
    id: uf.value,
    title: uf.label,
    subtitle: uf.unit,
  },
  {
    id: utm.value,
    title: utm.label,
    subtitle: utm.unit,
  },
];

const keyExtractor = (_: Indicators, index: number) => index.toString();

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = (url: string, params: any) =>
    navigation.navigate(url, params);

  const handleIconPress = useCallback(
    (id: string) => handleNavigation(INDICATOR_DETAIL, { id }),
    [],
  );
  const handleTitlePress = useCallback(
    (id: string) => handleNavigation(INDICATOR_LIST, { id }),
    [],
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={({ item }) => (
        <ListItem
          item={item}
          onTitlePress={handleTitlePress}
          onIconPress={handleIconPress}
        />
      )}
    />
  );
};

export default Home;
