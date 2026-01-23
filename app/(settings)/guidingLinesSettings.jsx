import { StyleSheet, useColorScheme } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedCrosshair from '../../components/ThemedCrosshair'
import FixatedWord from '../../components/FixatedWord'
import ThemedText from '../../components/ThemedText'
import ThemedRangeInputWithButtons from '../../components/ThemedRangeInputWithButtons'
import { useTheme } from '../../hooks/themeContext'
import { useCrosshair } from '../../hooks/crosshairContext'

const GuidingLinesSettings = () => {
    const {theme} = useTheme();
    const {crosshairOptions, setCrosshairOption} = useCrosshair();

    const [crosshairWidth, setCrosshairWidth] = useState(crosshairOptions.crosshairWidth/*  ?? 90 */);
    const [crosshairHeight, setCrosshairHeight] = useState(crosshairOptions.crosshairHeight /* ?? 16 */);
    const [crosshairLineWidth, setCrosshairLineWidth] = useState(crosshairOptions.crosshairLineWidth /* 2 */);
    const [crosshairDistance, setCrosshairDistance] = useState(crosshairOptions.crosshairDistance/* 16 */);

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
                    onChange={(width) => setCrosshairWidth(width)}
                    onComplete={(width) => setCrosshairOption('crosshairWidth', width)}
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
                    onChange={(height) => setCrosshairHeight(height)}
                    onComplete={(height) => setCrosshairOption('crosshairHeight', height)}
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
                    onChange={(lineWidth) => setCrosshairLineWidth(lineWidth)}
                    onComplete={(lineWidth) => setCrosshairOption('crosshairLineWidth', lineWidth)}
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
                    onChange={(distance) => setCrosshairDistance(distance)}
                    onComplete={(distance) => setCrosshairOption('crosshairDistance', distance)}
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