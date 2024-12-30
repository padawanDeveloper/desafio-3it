import { ListItem } from '@rneui/themed';

import { Item } from '../../../../types/Indicator';
import { ipc } from '../../../../constants/indicators';
import { paletteColor } from '../../../../constants/palette';

type Props = {
  item: Item;
  indicator: string;
};

const RenderItem = ({ item, indicator }: Props) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title style={{ color: paletteColor.BLUE_SKY }}>
        {item.date}
      </ListItem.Title>
    </ListItem.Content>
    <ListItem.Content right>
      <ListItem.Title right style={{ color: 'black' }}>
        {`${indicator === ipc.value ? '' : '$ '}${item.value}`}
      </ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

export default RenderItem;
