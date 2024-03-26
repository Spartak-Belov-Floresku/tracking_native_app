import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useContext } from 'react'
import { Context as AuthContext  } from '../context/AuthContext'

export default function LoaderScreen() {

    const { trySignIn } = useContext(AuthContext);

    useEffect(() => {
        trySignIn();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16}}>Loading...</Text>
        </View>
    )
}

LoaderScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 15,
      marginBottom: 200
    }
  })