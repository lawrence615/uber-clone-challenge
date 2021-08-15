import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import Map from 'components/Map'
import NavigateCard from 'components/NavigateCard';
import RideOptionsCard from 'components/RideOptionsCard';

const MapScreen = () => {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={tw` bg-gray-100 absolute top-10 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard}
            options={{
              headerShown: false,
            }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
