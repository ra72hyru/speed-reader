import { View } from 'react-native'
import { useTheme } from '../hooks/themeContext';

const ThemedView = ({style, children, ...props}) => {
    const { theme } = useTheme();

    return (
        <View style={[{backgroundColor: theme.background}, style]} {...props}>
            {children}
        </View>
    )
}

export default ThemedView