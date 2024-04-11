import { useContext} from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

function AccountScreen() {

    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})

AccountScreen.navigationOptions = () => {
    return {
      title: 'Account',
      tabBarIcon: <FontAwesome name="gear" size={20} color="white"/>
    };
};

export default AccountScreen;