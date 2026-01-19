import { View, Text, Pressable } from 'react-native'
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import ThemedView from './ThemedView'

const ControlBar = ({ paused=false, size=32, style, onPause, onRewind, onForward, onStart, onEnd }) => {


    return (
        <ThemedView style={[{flexDirection: 'row', justifyContent: 'space-around'}, style]}>
            <Pressable onPress={() => onStart()}>
                <SimpleLineIcons 
                    name='control-start'
                    size={Math.max(1, size - 2)}
                />
            </Pressable>
            <Pressable onPress={() => onRewind()}>
                <SimpleLineIcons 
                    name='control-rewind'
                    size={size}
                />
            </Pressable>
            {paused ? 
                <Pressable onPress={() => onPause(false)}>
                    <SimpleLineIcons 
                        name='control-play'
                        size={size}
                    />
                </Pressable>
                :
                <Pressable onPress={() => onPause(true)}>
                    <SimpleLineIcons 
                        name='control-pause'
                        size={size}
                    />
                </Pressable>
            }
            <Pressable onPress={() => onForward()}>
                <SimpleLineIcons 
                    name='control-forward'
                    size={size}
                />
            </Pressable>
            <Pressable onPress={() => onEnd()}>
                <SimpleLineIcons 
                    name='control-end'
                    size={Math.max(1, size - 2)}
                />
            </Pressable>
        </ThemedView>
    )
}

export default ControlBar