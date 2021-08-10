import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'

import { GOOGLE_MAPS_API_KEY } from '@env'
import { selectOrigin } from 'selectors/navSlice'

const Map = () => {

  const origin = useSelector(selectOrigin)
  console.log(origin)


  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {
        origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )
      }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
