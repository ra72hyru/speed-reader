import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'

const Login = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText isTitle={true} style={styles.title}>
                Login
            </ThemedText>

            <Spacer height={100} />

            <ThemedText>No account?</ThemedText>
            <Link href='/register'>
                <ThemedText>Register</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }, 
    title: {
        textAlign: 'center',
        fontSize: 18
    }
})