# chess-clock-app

This is a single screen application is developed with React Native and it is a timer countdown with different timer modes and increment times for chess players.

## Running the app

Installing dependencies

    yarn install

Running on IOS

    cd ios
    pod install
    cd ..
    yarn run ios

Running on Android

    yarn run android

### Dependencies

- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen): Used for making components and screens responsive.

### Timer Modes

- **Default:** It is a default mode that does not contain any increment time.
- **Fischer Before/After:** A specified amount of time is added to the player's main time each time before or after the move.
- **Bronstein:** This timing method adds time but unlike increment not always the maximum amount of time is added. If a player expends more than the specified delay, then the entire delay is added to the player's clock but if a player moves faster than the delay, only the exact amount of time expended by the player is added.

### Contact me

- [nhakanyilmaz@gmail.com](mailto:nhakanyilmaz@gmail.com)
