import { StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import FixatedWord from '../components/FixatedWord';
import ControlBar from '../components/ControlBar';
import ThemedCrosshair from '../components/ThemedCrosshair';
import { useCrosshair } from '../hooks/crosshairContext';

const Reader = ({ word, paused, onPause, onResume, onRewind, onForward, onStart, onEnd }) => {

    const {crosshairOptions} = useCrosshair();

    return (
        <ThemedView style={styles.container} safe={true}>

            <ThemedCrosshair
                crosshairWidth={crosshairOptions.crosshairWidth}
                crosshairHeight={crosshairOptions.crosshairHeight}
                crosshairLineWidth={crosshairOptions.crosshairLineWidth}
                crosshairDistance={crosshairOptions.crosshairDistance}
            >
                <FixatedWord 
                    word={word} 
                    style={{height: 60, fontSize: 36}} 
                />
            </ThemedCrosshair>

            <ControlBar 
                style={{width: '100%'}}
                paused={paused}
                onPause={onPause}
                onResume={onResume}
                onRewind={onRewind}
                onForward={onForward}
                onStart={onStart}
                onEnd={onEnd}
            />
            
        </ThemedView>
    )
}

export default Reader

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'stretch'
    },
})