import { View } from 'react-native';
import { Text } from '@rneui/themed';

import { paletteColor } from '../../../../constants/palette';
import styles from './styles';

type Info = {
  value: string;
  name: string;
  date: string;
  unit: string;
};

type Props = {
  info: Info;
};

const Header = ({ info }: Props) => (
  <>
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          color: paletteColor.BLUE_SKY,
        }}
        h1>
        {info.value}
      </Text>
    </View>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Nombre</Text>
        <Text>{info.name}</Text>
      </View>
      <View style={styles.title}>
        <Text>Fecha</Text>
        <Text>{info.date}</Text>
      </View>
      <View style={styles.title}>
        <Text>Unidad de medida</Text>
        <Text>{info.unit}</Text>
      </View>
    </View>
  </>
);

export default Header;
