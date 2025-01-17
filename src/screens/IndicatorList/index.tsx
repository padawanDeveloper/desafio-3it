import React from 'react';
import { FlatList } from 'react-native';

import { Item } from '../../types/Indicator';
import RenderItem from './components/Item';
import useFetchIdicatorData from '../../hooks/useFetchIdicatorData';
import { getLastMonths } from '../../utils/date';
import { euro, dolar, uf, ipc, utm } from '../../constants/indicators';
import ListEmpty from '../../components/List/ListEmptyComponent';
import useSetNavigationOptions from '../../hooks/useSetNavigationOptions';

type IndicatorDetail = Array<{ Valor: string; Fecha: string }>;

const keyExtractor = (_: Item, index: number) => index.toString();

const buildTwoMonthUrl = (indicator: string) => {
  const lastTwoMonths = getLastMonths(2);

  return `/${indicator}/periodo/${lastTwoMonths[1]}/${lastTwoMonths[0]}`;
};

const buildCurrentYearUrl = (indicator: string) => {
  const date = new Date();
  const year = date.getFullYear();

  return `/${indicator}/${year}`;
};

const switchUrl = (indicator: string) => {
  switch (indicator) {
    case dolar.value:
    case euro.value:
    case uf.value:
      return buildTwoMonthUrl(indicator);
    case ipc.value:
    case utm.value:
      return buildCurrentYearUrl(indicator);
    default:
      return '';
  }
};

const getLast30Items = (arr: any) => arr?.slice(-30);

const parseData = (data: IndicatorDetail) =>
  getLast30Items(Object.values(data)[0])
    ?.map((item: any) => ({ date: item['Fecha'], value: item['Valor'] }))
    ?.reverse();

const IndicatorList: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const { data, loading, error } = useFetchIdicatorData(switchUrl(id));
  useSetNavigationOptions(id);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={parseData(data)}
      renderItem={({ item }) => <RenderItem item={item} indicator={id} />}
      ListEmptyComponent={<ListEmpty isLoading={loading} error={error} />}
    />
  );
};

export default IndicatorList;
