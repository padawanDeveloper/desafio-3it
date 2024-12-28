import { ListRenderItem, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';

import { Indicators } from '../../../../types/Indicator';

const handleIconPress = (id: string) => console.log(id);
const handleTitlePress = (id: string) => console.log(id);

const renderItem: ListRenderItem<Indicators> = ({ item }) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <TouchableOpacity onPress={() => handleTitlePress(item.id)}>
        <ListItem.Title>{item.title}</ListItem.Title>
      </TouchableOpacity>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <TouchableOpacity onPress={() => handleIconPress(item.id)}>
      <Icon name="inbox" type="material-community" color="grey" />
    </TouchableOpacity>
  </ListItem>
);

export default renderItem;
