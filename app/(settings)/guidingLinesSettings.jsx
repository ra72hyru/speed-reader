import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedCrosshair from '../../components/ThemedCrosshair'
import FixatedWord from '../../components/FixatedWord'
import ThemedText from '../../components/ThemedText'
import ThemedRangeInputWithButtons from '../../components/ThemedRangeInputWithButtons'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Color'

const GuidingLinesSettings = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const [crosshairWidth, setCrosshairWidth] = useState(90);
    const [crosshairHeight, setCrosshairHeight] = useState(16);
    const [crosshairDistance, setCrosshairDistance] = useState(16);
    const [crosshairLineWidth, setCrosshairLineWidth] = useState(2);

    const buttonSize = 32;

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Guiding Lines</ThemedText>

            <ThemedView style={[styles.settingContainer, {backgroundColor: theme.background2}]}>
                <ThemedText>
                    <ThemedText style={[styles.settingTitle]}>Width: </ThemedText>
                    <ThemedText style={styles.value}>{crosshairWidth}</ThemedText>
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

            <ThemedView style={[styles.settingContainer, {backgroundColor: theme.background2}]}>
                <ThemedText>
                    <ThemedText style={[styles.settingTitle]}>Height of vertical lines: </ThemedText>
                    <ThemedText style={styles.value}>{crosshairHeight}</ThemedText>
                </ThemedText>
                <ThemedRangeInputWithButtons 
                    onChange={setCrosshairHeight}
                    lowerLimit={0}
                    upperLimit={100}
                    size={buttonSize}
                    step={1}
                    width={100}
                    value={crosshairHeight}
                    style={{backgroundColor: theme.background2}}
                />
            </ThemedView>

            <ThemedView style={[styles.settingContainer, {backgroundColor: theme.background2}]}>
                <ThemedText>
                    <ThemedText style={[styles.settingTitle]}>Line width: </ThemedText>
                    <ThemedText style={styles.value}>{crosshairLineWidth}</ThemedText>
                </ThemedText>
                <ThemedRangeInputWithButtons 
                    onChange={setCrosshairLineWidth}
                    lowerLimit={0}
                    upperLimit={10}
                    size={buttonSize}
                    step={1}
                    width={100}
                    value={crosshairLineWidth}
                    style={{backgroundColor: theme.background2}}
                />
            </ThemedView>

            <ThemedView style={[styles.settingContainer, {backgroundColor: theme.background2}]}>
                <ThemedText>
                    <ThemedText style={[styles.settingTitle]}>Distance of vertical lines: </ThemedText>
                    <ThemedText style={styles.value}>{crosshairDistance}</ThemedText>
                </ThemedText>
                <ThemedRangeInputWithButtons 
                    onChange={setCrosshairDistance}
                    lowerLimit={0}
                    upperLimit={75}
                    size={buttonSize}
                    step={1}
                    width={100}
                    value={crosshairDistance}
                    style={{backgroundColor: theme.background2}}
                />
            </ThemedView>

            <ThemedView style={{backgroundColor: theme.background2, paddingTop: 24, paddingBottom: 24, marginTop: 16}}>
                <ThemedCrosshair style={{backgroundColor: theme.background2}} crosshairWidth={crosshairWidth} crosshairHeight={crosshairHeight} crosshairLineWidth={crosshairLineWidth} crosshairDistance={crosshairDistance}>
                    <FixatedWord word={'example'} style={{backgroundColor: theme.background2}} />
                </ThemedCrosshair>
            </ThemedView>
        </ThemedView>
    )
}

export default GuidingLinesSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
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