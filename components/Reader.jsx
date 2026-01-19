import { StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import FixatedWord from '../components/FixatedWord';
import ControlBar from '../components/ControlBar';
import ThemedCrosshair from '../components/ThemedCrosshair';

const Reader = ({ word, paused, onPause, onRewind, onForward, onStart, onEnd }) => {

    return (
        <ThemedView style={styles.container}>

            <ThemedCrosshair>
                <FixatedWord 
                    word={word} 
                    style={{height: 60, fontSize: 36}} 
                />
            </ThemedCrosshair>

            <ControlBar 
                style={{width: '90%', marginLeft: 8, marginRight: 8, backgroundColor: 'green'}}
                paused={paused}
                onPause={onPause}
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