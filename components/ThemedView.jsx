import { View } from 'react-native'
import { useTheme } from '../hooks/themeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({style, children, safe = false, ...props}) => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    if (!safe) {
        return (
            <View style={[{backgroundColor: theme.background}, style]} {...props}>
                {children}
            </View>
        )
    }

    return (
        <View style={[{
                backgroundColor: theme.background, 
                paddingTop: insets.top, 
                paddingRight: insets.right, 
                paddingBottom: insets.bottom, 
                paddingLeft: insets.left
            }, 
            style]} {...props}>
            {children}
        </View>
    )
}

export default ThemedView