import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'

const Register = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText isTitle={true} style={styles.title}>
                Register
            </ThemedText>

            <Spacer height={100} />

            <ThemedText>Already have an account?</ThemedText>
            <Link href='/login'>
                <ThemedText>Login</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

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