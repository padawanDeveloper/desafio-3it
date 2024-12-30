import { ScrollView } from 'react-native';
import { Text } from '@rneui/themed';

import { LineChart } from 'react-native-chart-kit';

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
  style: {
    padding: 10,
    marginVertical: 8,
  },
};

type Props = {
  labels: Array<string>;
  data: Array<number>;
};

const LineChartComponent = ({ labels, data }: Props) => (
  <ScrollView horizontal>
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={1000}
      height={220}
      yAxisInterval={1}
      chartConfig={chartConfig}
      renderDotContent={({ x, y, index, indexData }) => (
        <Text key={index} style={{ position: 'absolute', top: y, left: x }}>
          {indexData}
        </Text>
      )}
    />
  </ScrollView>
);

export default LineChartComponent;
