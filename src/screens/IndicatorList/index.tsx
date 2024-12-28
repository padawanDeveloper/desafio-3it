import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Item } from '../../types/Indicator';
import { indicator } from '../../api';
import renderItem from './components/Item';

const keyExtractor = (_: Item, index: number) => index.toString();

const IndicatorList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    indicator
      .fetchLast30Days('euro')
      .then(resp => setData(resp))
      .catch(err => console.log('err', err));
  }, []);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data
        .map(item => ({ date: item['Fecha'], value: item['Valor'] }))
        .reverse()}
      renderItem={renderItem}
    />
  );
};

export default IndicatorList;
