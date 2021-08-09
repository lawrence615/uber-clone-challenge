import React from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/application/store'
import HomeScreen from 'views/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
