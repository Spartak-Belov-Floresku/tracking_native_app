import '../_mockLocation'

import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';

import Map from '../components/Map'
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

export default withNavigationFocus(

  function TrackcreateScreen({ isFocused }) {

    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3>TrackcreateScreen</Text>
        <Map />
        {err && <Text>Please enable location services!</Text>}
      </SafeAreaView>
    )
  }
);

const styles = StyleSheet.create({

})