import React from 'react';
import { FlatList } from 'react-native';

import { Item } from '../../types/Indicator';
import renderItem from './components/Item';
import useFetchIdicatorData from '../../hooks/useFetchIdicatorData';
import { getLastTwoMonths } from '../../utils/date';

type IndicatorDetail = Array<{ Valor: string; Fecha: string }>;

const keyExtractor = (_: Item, index: number) => index.toString();

const buildUrl = (indicator: string) => {
  const lastTwoMonths = getLastTwoMonths();

  return `/${indicator}/periodo/${lastTwoMonths[1]}/${lastTwoMonths[0]}`;
};

const getLast30Items = (arr: any) => arr?.slice(-30);

const parseData = (data: IndicatorDetail) =>
  getLast30Items(Object.values(data)[0])
    ?.map((item: any) => ({ date: item['Fecha'], value: item['Valor'] }))
    ?.reverse();

const IndicatorList: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const { data, loading, error } = useFetchIdicatorData(buildUrl(id));

  console.log({ data, loading, error });

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={parseData(data)}
      renderItem={renderItem}
    />
  );
};

export default IndicatorList;
