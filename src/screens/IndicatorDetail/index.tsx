import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Text } from '@rneui/themed';

import { euro, dolar, uf, ipc, utm } from '../../constants/indicators';
import { getLastMonths } from '../../utils/date';
import { LineChartComponent, Header } from './components';
import useFetchIdicatorData from '../../hooks/useFetchIdicatorData';
import { indicatorList } from '../../constants/indicators';

const buildTwoMonthUrl = (indicator: string) => {
  const lastTwoMonths = getLastMonths(2);
  const lastItem = lastTwoMonths.length - 1;
  return `/${indicator}/periodo/${lastTwoMonths[lastItem]}/${lastTwoMonths[0]}`;
};

const buildLastMonths = (indicator: string) => {
  const last12Months = getLastMonths(12);
  const lastItem = last12Months.length - 1;
  return `/${indicator}/periodo/${last12Months[lastItem]}/${last12Months[0]}`;
};

const switchUrl = (indicator: string) => {
  switch (indicator) {
    case dolar.value:
    case euro.value:
    case uf.value:
      return buildTwoMonthUrl(indicator);
    case ipc.value:
    case utm.value:
      return buildLastMonths(indicator);
    default:
      return '';
  }
};

const getLast10Items = (arr: any) => arr?.slice(-10);

const getDates = (data: any) => data?.map((item: any) => item['Fecha']);
const getValues = (data: any) =>
  data?.map((item: any) => parseFloat(item['Valor'].replace(',', '.')));

const build10Labels = (data: any) => getDates(getLast10Items(data));
const data10List = (data: any) => getValues(getLast10Items(data));

const switchDataInfo = (indicator: string, data: any) => {
  switch (indicator) {
    case dolar.value:
    case euro.value:
    case uf.value:
      return {
        labels: build10Labels(data),
        data: data10List(data),
      };
    case ipc.value:
    case utm.value:
      return {
        labels: getDates(data),
        data: getValues(data),
      };
    default:
      break;
  }
};

const IndicatorDetail: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const { data, loading, error } = useFetchIdicatorData(switchUrl(id));

  if (error) return <Text>Ocurrio un error inesperado</Text>;
  if (loading) return <ActivityIndicator />;

  const info = switchDataInfo(id, Object.values(data)[0]);

  return (
    <ScrollView>
      <Header
        info={{
          value: info?.data[info?.data.length - 1],
          name: indicatorList[id].label,
          date: info?.labels[info?.labels.length - 1],
          unit: indicatorList[id].unit,
        }}
      />
      <LineChartComponent labels={info?.labels} data={info?.data} />
    </ScrollView>
  );
};

export default IndicatorDetail;
