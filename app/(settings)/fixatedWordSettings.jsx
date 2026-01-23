import { StyleSheet, TouchableOpacity } from 'react-native'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../hooks/themeContext';

const FixatedWordSettings = () => {
    const {theme, themeName, setTheme} = useTheme();

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Word</ThemedText>

            <ThemedView style={[styles.settingContainer, {backgroundColor: theme.background2}]}>
                <ThemedText>
                    <ThemedText style={[styles.settingTitle]}>Font Size: </ThemedText>
                    <ThemedText style={styles.value}>{fontSize}</ThemedText>
                </ThemedText>
                <ThemedRangeInputWithButtons 
                    onChange={setCrosshairWidth}
                    lowerLimit={0}
                    upperLimit={100}
                    size={buttonSize}
                    step={1}
                    width={100}
                    value={crosshairWidth}
                    style={{backgroundColor: theme.background2}}
                />
            </ThemedView>
        </ThemedView>
    )
}

export default FixatedWordSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        marginTop: 12
        //alignItems: 'center',
    },
    settingContainer: {
        padding: 12,
        justifyContent: 'space-around',
        borderRadius: 8,
        height: 100,
        marginHorizontal: 12
    },
    title: {
        fontSize: 32,
        marginLeft: 24
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: 500
    },
    value: {
        fontSize: 17,
        fontWeight: 600,
    }
})