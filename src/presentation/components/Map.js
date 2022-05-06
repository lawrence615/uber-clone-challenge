import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector, useDispatch } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'

import { GOOGLE_MAPS_API_KEY } from '@env'
import { selectOrigin, selectDestination } from 'selectors/navSlice'
import { setTravelTimeInformation } from 'reducers/navSlice'

const Map = () => {

  const mapRef = useRef(null)
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const dispatch = useDispatch()

  const { width, height } = Dimensions.get('window')

  useEffect(() => {
    if (!origin || !destination) return

    // Zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        right: (width / 20), bottom: ((height / 2) / 20), left: (width / 20), top: ((height / 2) / 20),
        // top: 50, right: 50, bottom: 50, left: 50,
      }
    })
  }, [origin, destination])

  // calculates the travel time
  useEffect(() => {
    if (!origin || !destination) return

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}
      &key=${GOOGLE_MAPS_API_KEY}`)
        .then((res) => res.json())
        .then(data => {
          console.debug(data.rows[0].elements[0])
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
    }
    getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_API_KEY])


  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          optimizeWaypoints={true}
          strokeColor="black"
        />
      )}

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

      {
        destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
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
