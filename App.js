import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import { navigationRef } from './src/navigations/RootNavigation';
import LoginScreen from './src/screens/LoginScreen';
import RootContext from './src/context/RootContext';

const App = () => {
  const [auth, setAuth] = useState(false);
  const rootContext = { auth, setAuth };

  return (
    <RootContext.Provider value={rootContext}>
      <NavigationContainer ref={navigationRef}>
        { auth ? <StackNavigation /> : <LoginScreen /> }
      </NavigationContainer>
    </RootContext.Provider>
  );
};

export default App;
