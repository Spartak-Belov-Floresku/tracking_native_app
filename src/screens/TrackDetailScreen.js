import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { Context as TrackContex } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

export default function TrackDetailScreen({navigation }) {
  const { state } = useContext(TrackContex);
  const _id = navigation.getParam('_id');

  const track = state.find( t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text style={{ fontSize: 48}}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        zoomControlEnabled
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    height: 300,
  }
})