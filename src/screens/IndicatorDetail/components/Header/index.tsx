import { View } from 'react-native';
import { Text } from '@rneui/themed';

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
    <View>
      <Text
        style={{
          textAlign: 'center',
        }}
        h1>
        {info.value}
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Nombre</Text>
      <Text>{info.name}</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Fecha</Text>
      <Text>{info.date}</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Unidad de medida</Text>
      <Text>{info.unit}</Text>
    </View>
  </>
);

export default Header;
