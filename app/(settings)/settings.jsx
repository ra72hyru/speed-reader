import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router';
import { useTheme } from '../../hooks/themeContext';


const settings = () => {
    const {setTheme} = useTheme();

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
            <TouchableOpacity onPress={() => setTheme('auto')}>
                <Text style={{color: 'red'}}>System Default</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTheme('light')}>
                <Text style={{color: 'red'}}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTheme('dark')}>
                <Text style={{color: 'red'}}>Dark</Text>
            </TouchableOpacity>
        </ThemedView>
    )
}

export default settings

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: 12,
        flex: 1
    },
    subcontainer: {
        justifyContent: 'flex-start',
        marginLeft: 12
    },
    header: {
        fontSize: 24
    }
})