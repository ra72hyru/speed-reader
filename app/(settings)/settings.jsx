import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router';
import { useTheme } from '../../hooks/themeContext';
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons';


const settings = () => {
    const {theme, setTheme} = useTheme();

    return (
        <ThemedView style={styles.container}>
            <Link href='/guidingLinesSettings'>
                <ThemedView style={styles.subcontainer}>
                    <SimpleLineIcons 
                        name='target'
                        color={theme.text}
                        size={28}
                    />
                        <ThemedText style={styles.header}>Fixation Lines</ThemedText>
                </ThemedView>
            </Link>

            <Link href='/fixatedWordSettings'>
                <ThemedView style={styles.subcontainer}>
                    <SimpleLineIcons 
                        name='speech'
                        color={theme.text}
                        size={28}
                    />
                    <ThemedText style={styles.header}>Word</ThemedText>
                </ThemedView>
            </Link>
            
            <Link href='/themeSettings'>
                <ThemedView style={styles.subcontainer}>
                    <SimpleLineIcons 
                        name='equalizer'
                        color={theme.text}
                        size={28}
                        />
                    <ThemedText style={styles.header}>Color Theme</ThemedText>
                </ThemedView>
            </Link>
        </ThemedView>
    )
}

export default settings

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: 0,
        marginTop: 24,
        flex: 1,
        gap: 32
    },
    subcontainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 24,
        paddingLeft: 24,
    },
    header: {
        fontSize: 24
    }
})