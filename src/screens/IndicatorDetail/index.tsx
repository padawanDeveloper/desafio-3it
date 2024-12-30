import { ScrollView, View } from 'react-native';
import { Text } from '@rneui/themed';

import LineChartComponent from './components/charts/Line';

const Header = () => (
  <>
    <View>
      <Text
        style={{
          textAlign: 'center',
        }}
        h1>
        $ 913,43
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Nombre</Text>
      <Text>euro</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Nombre</Text>
      <Text>euro</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Text>Nombre</Text>
      <Text>euro</Text>
    </View>
  </>
);

const IndicatorDetail = () => {
  return (
    <ScrollView>
      <Header />
      <LineChartComponent />
    </ScrollView>
  );
};

export default IndicatorDetail;
