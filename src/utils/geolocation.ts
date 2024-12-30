import { Platform, PermissionsAndroid, Alert } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

function requestLocationPermission() {
  return new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization(
        () => {
          resolve(true);
        },
        () => {
          resolve(false);
        },
      );
    } else if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          Alert.alert('Error inesperado', error?.message);
        }
        reject();
      }
    }
  });
}

export { requestLocationPermission };
