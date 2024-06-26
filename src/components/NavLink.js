import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


function NavLink({navigation, text, routeName}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
            <Text style={styles.link}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        color: 'blue',
    }
});

export default withNavigation(NavLink)