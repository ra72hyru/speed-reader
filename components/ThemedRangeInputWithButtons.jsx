import { View, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import ThemedView from './ThemedView'
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { useTheme } from '../hooks/themeContext'

const ThemedRangeInputWithButtons = ({width=60, value=300, onChange, onComplete, lowerLimit=60, upperLimit=1000, step=5, size=28, style }) => {
    const {theme} = useTheme();

    return (
        <ThemedView style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: `${width}%`}, style]}>
            <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => {onChange(prev => prev === lowerLimit ? prev : prev - step); onComplete(value - step <= lowerLimit ? lowerLimit : value - step);}}>
                <SimpleLineIcons 
                    name='minus'
                    size={size}
                    color={theme.text}
                />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Slider 
                    style={{}} 
                    value={value}
                    minimumValue={lowerLimit}
                    maximumValue={upperLimit}
                    step={step}
                    lowerLimit={lowerLimit}
                    upperLimit={upperLimit}
                    onValueChange={onChange}
                    onSlidingComplete={onComplete}
                />
                </View>
            <TouchableOpacity style={{alignItems: 'flex-start'}} onPress={() => {onChange(prev => prev === upperLimit ? prev : prev + step); onComplete(value >= upperLimit ? upperLimit : value + step);}}>
                <SimpleLineIcons 
                    name='plus'
                    size={size}
                    color={theme.text}
                />
            </TouchableOpacity>
        </ThemedView>
  )
}

export default ThemedRangeInputWithButtons