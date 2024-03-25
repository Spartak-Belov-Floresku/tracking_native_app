import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

export default function SignupScreen({ navigation }) {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
    </Spacer>
    <Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </Spacer>
    <Spacer>
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </Spacer>
    <Spacer>
      {state.errorMessage && <Text style={styles.errorMessage}>{state.errorMessage}</Text>}
      <Button
        title="Sig Up"
        onPress={()=> signup({email, password})}
      />
    </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    margin: 15
  }
})