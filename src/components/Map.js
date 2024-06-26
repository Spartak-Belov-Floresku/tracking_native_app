import { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';


export default function Map() {

    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200}} />;
    }

    return <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                zoomControlEnabled
            >
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158,158,255,.3)"
                />
                <Polyline coordinates={locations.map(l => l.coords)} />

            </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 400
    }
})