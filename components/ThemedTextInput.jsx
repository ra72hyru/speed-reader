import {  TextInput } from 'react-native'
import { useTheme } from '../hooks/themeContext'

const ThemedTextInput = ({fontSize = 16, height='40%', style, text="", onChange, backgroundColorLevel=2}) => {
    const {theme} = useTheme();

    return (
        <TextInput style={[{
            backgroundColor: backgroundColorLevel === 2 ? theme.background3 : backgroundColorLevel === 1 ? theme.background2 : theme.background,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: theme.borderColor,
            fontSize,
            color: theme.text,
            height,
            verticalAlign: 'top',
            paddingTop: 2,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 2
        }, style
        ]}
        multiline={true}
        value={text}
        onChangeText={(text) => onChange(text)}
        >

        </TextInput>
    )
}

export default ThemedTextInput