import { FlatList } from 'react-native';

import { euro, dolar, uf, ipc, utm } from '../../constants/indicators';
import { Indicators } from '../../types/Indicator';
import { indicator } from '../../api';
import renderItem from './components/IndicatorItem';

const list = [
  {
    id: dolar.value,
    title: dolar.label,
    subtitle: 'Pesos',
  },
  {
    id: euro.value,
    title: euro.label,
    subtitle: 'Pesos',
  },

  {
    id: ipc.value,
    title: ipc.label,
    subtitle: 'Pesos',
  },
  {
    id: uf.value,
    title: uf.label,
    subtitle: 'Pesos',
  },
  {
    id: utm.value,
    title: utm.label,
    subtitle: 'Pesos',
  },
];

const keyExtractor = (_: Indicators, index: number) => index.toString();

const IndicatorList = () => {
  indicator
    .fetchLast30Days('euro')
    .then(resp => console.log('resp', resp))
    .catch(err => console.log('err', err));

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

export default IndicatorList;
