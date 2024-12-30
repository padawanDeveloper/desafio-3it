import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';

type IProps = {
  isLoading: boolean;
  error: string | null;
};

const ListEmpty = ({ isLoading, error }: IProps) => (
  <View style={styles.empty}>
    {isLoading ? (
      <ActivityIndicator animating={true} />
    ) : (
      <Text>{error ? 'Ocurrió un error inesperado' : '0 results'}</Text>
    )}
  </View>
);

export default ListEmpty;
