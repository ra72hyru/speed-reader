import { View, Text, StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router';

const settings = () => {
    return (
        <ThemedView style={styles.container}>
            <Link href='/guidingLinesSettings'>
                <ThemedText style={styles.header}>Guiding Lines</ThemedText>
            </Link>
            <ThemedView style={styles.subcontainer}>
                <ThemedText>Width</ThemedText>
                <ThemedText>Height of vertical lines</ThemedText>
                <ThemedText>Line Width</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

export default settings

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: 12
    },
    subcontainer: {
        justifyContent: 'flex-start',
        marginLeft: 12
    },
    header: {
        fontSize: 24
    }
})