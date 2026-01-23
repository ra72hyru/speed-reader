import { StyleSheet, TouchableOpacity } from 'react-native'
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import ThemedView from './ThemedView'
import { useTheme } from '../hooks/themeContext'

const ControlBar = ({ paused=false, size=32, style, onPause, onRewind, onForward, onStart, onEnd }) => {
    const {theme} = useTheme();

    return (
        <ThemedView style={[styles.container, style]}>
            <TouchableOpacity onPress={() => onStart()} style={[styles.button, {backgroundColor: theme.text}]}>
                <SimpleLineIcons 
                    name='control-start'
                    size={Math.max(8, size - 4)}
                    color={theme.background}
                    style={{marginLeft: 0}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onRewind()} style={[styles.button, {backgroundColor: theme.text}]}>
                <SimpleLineIcons 
                    name='control-rewind'
                    size={size}
                    color={theme.background}
                    style={{marginLeft: -2}}
                />
            </TouchableOpacity>
            {paused ? 
                <TouchableOpacity onPress={onPause} style={[styles.playPauseButton, {backgroundColor: theme.text}]}>
                    <SimpleLineIcons 
                        name='control-play'
                        size={size}
                        color={theme.background}
                        style={{marginLeft: 4}}
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPause} style={[styles.playPauseButton, {backgroundColor: theme.text}]}>
                    <SimpleLineIcons 
                        name='control-pause'
                        size={size}
                        color={theme.background}
                        style={{marginLeft: 0}}
                    />
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => onForward()} style={[styles.button, {backgroundColor: theme.text}]}>
                <SimpleLineIcons 
                    name='control-forward'
                    size={size}
                    color={theme.background}
                    style={{marginLeft: 2}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEnd()} style={[styles.button, {backgroundColor: theme.text}]}>
                <SimpleLineIcons 
                    name='control-end'
                    size={Math.max(8, size - 4)}
                    color={theme.background}
                    style={{marginLeft: 2}}
                />
            </TouchableOpacity>
        </ThemedView>
    )
}

export default ControlBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        gap: 8,
    },
    button: {
        borderRadius: 9999,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    },
    playPauseButton: {
        borderRadius: 9999,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 75
    }
});