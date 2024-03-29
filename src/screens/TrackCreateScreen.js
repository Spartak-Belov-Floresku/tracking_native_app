import '../_mockLocation'

import { StyleSheet } from 'react-native';
import { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';

import Map from '../components/Map'
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

export default withNavigationFocus(

  function TrackcreateScreen({ isFocused }) {

    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback(location => {
      addLocation(location, recording)
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);


    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3>TrackcreateScreen</Text>
        <Map />
        {err && <Text>Please enable location services!</Text>}
        <TrackForm />
      </SafeAreaView>
    )
  }
);

const styles = StyleSheet.create({

})