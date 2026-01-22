import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Color'
import { useTheme } from '../hooks/themeContext';

const ThemedView = ({style, children, ...props}) => {
    //const colorScheme = useColorScheme()
    //const theme = Colors[colorScheme] ?? Colors.light
    const { theme } = useTheme();
    return (
        <View style={[{backgroundColor: theme.background}, style]} {...props}>
            {children}
        </View>
    )
}

export default ThemedView