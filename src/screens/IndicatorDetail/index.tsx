import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Text } from '@rneui/themed';

import { LineChartComponent, Header } from './components';
import useFetchIdicatorData from '../../hooks/useFetchIdicatorData';
import { indicatorList } from '../../constants/indicators';
import { switchUrl, switchDataInfo } from './utils/data';
import { ipc } from '../../constants/indicators';

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
          value: `${id === ipc.value ? '' : '$ '}${
            info?.data[info?.data.length - 1]
          }`,
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
