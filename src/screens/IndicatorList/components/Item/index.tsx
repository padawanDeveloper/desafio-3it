import { ListItem } from '@rneui/themed';

import { Item } from '../../../../types/Indicator';

type Props = {
  item: Item;
};

const renderItem = ({ item }: Props) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title style={{ color: '#1e90ff' }}>{item.date}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Content right>
      <ListItem.Title right style={{ color: 'black' }}>
        $ {item.value}
      </ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

export default renderItem;
