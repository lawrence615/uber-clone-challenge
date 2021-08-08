import React from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/application/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Let's build UBER!</Text>
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
