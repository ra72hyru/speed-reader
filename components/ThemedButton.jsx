import { StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from './ThemedText';
import { useTheme } from '../hooks/themeContext';

const ThemedButton = ({ text, onPress, btnStyle, textStyle }) => {
    const {theme} = useTheme();
    
    return (
        <TouchableOpacity style={[{backgroundColor: theme.text}, styles.button, btnStyle]} onPress={onPress}>
            <ThemedText style={[{color: theme.background}, styles.buttonText, textStyle]}>
                {text}
            </ThemedText>
        </TouchableOpacity>
    )
}

export default ThemedButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 28
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});