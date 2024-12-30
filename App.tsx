import React, { useEffect } from 'react';

import { requestLocationPermission } from './src/utils/geolocation';
import RootNavigation from './src/navigation';

const App: React.FC = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);
  return <RootNavigation />;
};

export default App;
