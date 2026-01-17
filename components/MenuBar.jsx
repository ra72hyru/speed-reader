import { View, Text, Pressable } from 'react-native'
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import ThemedView from './ThemedView'

const MenuBar = ({ paused=false, size=32, style, onPause }) => {


    return (
        <ThemedView style={[{flexDirection: 'row', justifyContent: 'space-around'}, style]}>
            <Pressable>
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
            <Pressable>
                <SimpleLineIcons 
                    name='control-forward'
                    size={size}
                />
            </Pressable>
        </ThemedView>
    )
}

export default MenuBar