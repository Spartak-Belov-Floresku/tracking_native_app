import '../_mockLocation'

import { StyleSheet } from 'react-native';
import { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Map from '../components/Map'
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';



function TrackcreateScreen({ isFocused }) {

  const { state: { recording }, addLocation } = useContext(LocationContext);

  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording]);

  const [err] = useLocation(isFocused || recording, callback);


  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err && <Text>Please enable location services!</Text>}
      <TrackForm />
    </SafeAreaView>
  )
};

TrackcreateScreen.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} color="white"/>
  };
};


const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackcreateScreen);