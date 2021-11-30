import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';

const App = () => {

  useEffect(() => {

  }, []);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
