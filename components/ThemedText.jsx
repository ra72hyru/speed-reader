import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Color'

const ThemedText = ({style, isTitle = false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const textColor = isTitle ? theme.title : theme.text

    return (
        <Text style={[{color: textColor}, style]} {...props} />
    )
}

export default ThemedText