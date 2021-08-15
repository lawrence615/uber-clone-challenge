import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { selectTravelTimeInformation } from 'selectors/navSlice'


const data = [
  {
    id: "Uber-X-1",
    title: "UberX",
    multiplier: 1,
    base_fare: 80, // flat fee charged at the beginning of every ride
    fixed_fare: 200,
    per_km_fare: 25,
    per_min_fare: 4, // fee charged for each minute you are inside the ride
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-2",
    title: "Uber XL",
    multiplier: 1.2,
    base_fare: 90, // flat fee charged at the beginning of every ride
    fixed: 250,
    per_km_fare: 30, // fee charged for each km of the ride
    per_min_fare: 5, // fee charged for each minute you are inside the ride
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-3",
    title: "Uber LUX",
    multiplier: 1.75,
    base_fare: 100, // flat fee charged at the beginning of every ride
    fixed: 300,
    per_km_fare: 35,
    per_min_fare: 6, // fee charged for each minute you are inside the ride
    image: "https://links.papareact.com/7pf"
  }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="font-awesome" size={15} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item: { id, title, multiplier, base_fare, fixed_fare, per_km_fare, per_min_fare, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={
              tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{
                uri: image
              }} />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Time: {travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {travelTimeInformation && (
                new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'KES'
                }).format(
                  // (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                  (base_fare + (per_min_fare * Math.floor(travelTimeInformation?.duration.value / 60)) + (per_km_fare * parseFloat(travelTimeInformation?.distance.text)))
                )
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
