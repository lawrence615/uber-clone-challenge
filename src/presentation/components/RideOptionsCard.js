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
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-3",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="font-awesome" size={15} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride - {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
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
              <Text>Time: {travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>KES 150.00</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
