import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useState } from 'react';
import Spacer from './Spacer';

export default function AuthForm({ headerText, errorMessage, submitText, onSubmite}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                <Button
                    title={submitText}
                    onPress={()=> onSubmite({email, password})}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        margin: 10
    },
})