import { Text } from 'react-native'
import { useTheme } from '../hooks/themeContext'

const ThemedText = ({style, isTitle = false, ...props}) => {
    const {theme} = useTheme();

    const textColor = isTitle ? theme.title : theme.text

    return (
        <Text style={[{color: textColor}, style]} {...props} />
    )
}

export default ThemedText