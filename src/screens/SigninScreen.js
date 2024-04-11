import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default function SigninScreen() {

  const { state, signin, clearErrMsg } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/**
       * NavigationEvents is called once when navigation events fire.
       */}
      <NavigationEvents onWillFocus={clearErrMsg} />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitText="Sign In"
        onSubmite={signin}
      />
      <NavLink
        text="Don't have an account?"
        routeName="Signup"
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  }
})