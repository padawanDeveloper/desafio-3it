import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';

import { Indicators } from '../../../../types/Indicator';
import { paletteColor } from '../../../../constants/palette';

interface Iindicator {
  item: Indicators;
  onTitlePress: (id: string) => void;
  onIconPress: (id: string) => void;
}

const ListIndicatorsItem = ({
  item,
  onTitlePress,
  onIconPress,
}: Iindicator) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <TouchableOpacity onPress={() => onTitlePress(item.id)}>
        <ListItem.Title>{item.title}</ListItem.Title>
      </TouchableOpacity>
      <ListItem.Subtitle style={{ color: paletteColor.BLUE_SKY }}>
        {item.subtitle}
      </ListItem.Subtitle>
    </ListItem.Content>
    <TouchableOpacity onPress={() => onIconPress(item.id)}>
      <Icon
        name="infocirlceo"
        type="ant-design"
        color={paletteColor.BLUE_SKY}
      />
    </TouchableOpacity>
  </ListItem>
);

export default React.memo(ListIndicatorsItem);
