## Uber Clone Challenge

This is a React Native app built using TailwindCSS and a number of Google Maps API to simulate how an Uber app works.

The design has been done using TailwindCSS, which is very friendly, and Google Maps API for the mappiing, estimation of distances e.t.c:
- Directions API - directions from A - B
- Distance Matrix API - mileage calculations
- Places API
- Maps SDK for Android - had to be enabled to work on Android

This is thanks to the good work of **Sonny Sangha** and the entire video tutorial can be found [here](https://www.youtube.com/watch?v=bvn_HYpix6s)

## TODOS
- [x] Setting up with React Native Cli
- [x] Run on Android device
- [ ] Run on iOS

## Run the app

### 1. Get the app

```
$ git clone https://github.com/lawrence615/uber-clone-challenge.git

$ cd uber-clone-challenge // change directory
```

### 2. Install packages
```
$ yarn install
```

### 3. Save .env.teamplate as .env
Create a Google app here, then generate a key from the navigation on the left side i.e. 

Add the key generated to GOOGLE_MAPS_API_KEY of the .env file

### 4. Build

You will need at least two tabs open;

Tab 1: Start metro server on one tab

```
$ react-native start --port=8082
```

OR

```
$ yarn start --port=8082 --reset-cache
```

*NB:* Make sure you have a device connected e.g. Android phone

To check:


   ```
   $ adb devices

   List of devices attached
   14ed2fcc device         # Physical device
   ```

Tab 2: Run app on Android phone

```
$ npx react-native run-android --port=8082
```

## Screenshots

<div>
  <img align="center" width="110" height="200" src="./screenshots/image-1.jpeg">
  <img align="center" width="110" height="200" src="./screenshots/image-2.jpeg">
  <img align="center" width="110" height="200" src="./screenshots/image-3.jpeg">
</div>



