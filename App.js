import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/application/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'navigation/AppNavigator';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider >
  );
}

export default App;
