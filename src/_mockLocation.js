import * as Location from 'expo-location';

const tenMettersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.084 + increment * tenMettersWithDegrees,
            latitude: 37.4219983 + increment * tenMettersWithDegrees
        }
    };
};

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000)
