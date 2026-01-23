import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { Stack } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeProvider, useTheme } from '../hooks/themeContext'
import * as SystemUI from 'expo-system-ui'
import { StatusBar } from 'expo-status-bar'
import { MenuProvider } from 'react-native-popup-menu'
import { CrosshairProvider } from '../hooks/crosshairContext'


const RootContent = () => {
    const {theme, themeName} = useTheme();
    SystemUI.setBackgroundColorAsync(theme.background);

    return (
        <>
            <StatusBar style={themeName === 'dark' ? 'light' : 'dark'} animated={true} translucent={false} backgroundColor={theme.background2} />
            <Stack screenOptions={{contentStyle: {backgroundColor: theme.background}, headerStyle: {backgroundColor: theme.background2}, headerTintColor: theme.text}}>
                <Stack.Screen name='index' options={{title: 'Home', animation: 'slide_from_right'}} />
                <Stack.Screen 
                    name='reader' 
                    options={{
                        title: 'Reader', 
                        animation: 'none', 
                        headerRight: () => (
                                            <TouchableOpacity onPress={() => navigate('/(settings)/settings')}>
                                                <SimpleLineIcons name='settings' color={theme.text} size={28}/>
                                            </TouchableOpacity>
                                        )
                    }} 
                />
                <Stack.Screen 
                    name='(settings)'
                    options={{headerShown: false, animation: 'slide_from_right'}}
                />
            </Stack>
        </>
    );
}

const RootLayout = () => {
    return (
        <ThemeProvider>
            <CrosshairProvider>
                <MenuProvider>
                    <RootContent />
                </MenuProvider>
            </CrosshairProvider>
{/*             <Text style={styles.footer}>Footer</Text> */}
        </ThemeProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    footer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        height: 40
    }
})