import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { Stack } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SettingsLayout = () => {
    return (
        <>
            <Stack>
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