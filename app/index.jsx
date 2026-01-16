import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/favicon.png'
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.title} isTitle={true}>Home</ThemedText>
        <Spacer height={10}/>
        <ThemedText>Starting Page</ThemedText>
        <Spacer />
        <Link href="/about">
            <Image height={10} width={100} styles={styles.img} source={Logo} />
            <ThemedText>About</ThemedText>
        </Link>
        <Spacer />
        <Link href='/login'>
            <ThemedText>Login</ThemedText>
        </Link>
        <Link href='/register'>
            <ThemedText>Register</ThemedText>
        </Link>
        <Spacer />
        <Link href="/reader">
            <ThemedText>Reader</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 36,
    }, 
    img: {
        margin: 20,
        width: 10,
        height: 10
    },
    link: {
        borderBottomWidth: 1
    }
});