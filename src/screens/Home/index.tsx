import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';

import { Indicators } from '../../types/Indicator';

const list = [
  {
    id: '',
    title: 'Amy Farha',
    subtitle: 'Pesos',
    onTitlePress: () => console.log('hola1'),
    onIconPress: () => console.log('holaicon1'),
  },
  {
    id: '',
    title: 'Chris Jackson',
    subtitle: 'Pesos',
    onTitlePress: () => console.log('hola2'),
    onIconPress: () => console.log('holaicon2'),
  },
];

const keyExtractor = (_: Indicators, index: number) => index.toString();

const renderItem: ListRenderItem<Indicators> = ({ item }) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <TouchableOpacity onPress={item.onTitlePress}>
        <ListItem.Title>{item.title}</ListItem.Title>
      </TouchableOpacity>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <TouchableOpacity onPress={item.onIconPress}>
      <Icon name="inbox" type="material-community" color="grey" />
    </TouchableOpacity>
  </ListItem>
);

const IndicatorList = () => (
  <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
);

export default IndicatorList;
