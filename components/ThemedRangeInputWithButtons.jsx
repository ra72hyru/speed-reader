import { View, Text, Pressable, useColorScheme } from 'react-native'
import Slider from '@react-native-community/slider'
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { Colors } from '../constants/Color'

const ThemedRangeInputWithButtons = ({width=60, wordsPerMinute=300, onChange, lowerLimit=60, upperLimit=1000, step=5, size=28 }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: `${width}%`, borderWidth: 1, borderColor: 'red'}}>
            <Pressable style={{alignItems: 'flex-end'}} onPress={() => onChange(prev => prev === lowerLimit ? prev : prev - step)}>
                <SimpleLineIcons 
                    name='minus'
                    size={size}
                    color={theme.text}
                />
            </Pressable>
            <View style={{flex: 1}}>
                <Slider 
                    style={{}} 
                    value={wordsPerMinute}
                    minimumValue={lowerLimit}
                    maximumValue={upperLimit}
                    step={step}
                    lowerLimit={lowerLimit}
                    upperLimit={upperLimit}
                    onValueChange={onChange}
                />
                </View>
            <Pressable style={{alignItems: 'flex-start'}} onPress={() => onChange(prev => prev === upperLimit ? prev : prev + step)}>
                <SimpleLineIcons 
                    name='plus'
                    size={size}
                    color={theme.text}
                />
            </Pressable>
        </ThemedView>
  )
}

export default ThemedRangeInputWithButtons