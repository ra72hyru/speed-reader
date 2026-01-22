import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { Stack } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../hooks/themeContext'

const SettingsLayout = () => {
    const {theme} = useTheme();

    return (
        <>
            <Stack screenOptions={{contentStyle: {backgroundColor: theme.background}, headerStyle: {backgroundColor: theme.background2}, headerTintColor: theme.text, animation: 'slide_from_right'}}>
                <Stack.Screen 
                    name='settings'
                    options={{title: 'Settings'}}
                />
                <Stack.Screen 
                    name='guidingLinesSettings'
                    options={{title: '', animation: 'slide_from_right'}}
                />
            </Stack>
        </>
    )
}

export default SettingsLayout

const styles = StyleSheet.create({
    footer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        height: 40
    }
})