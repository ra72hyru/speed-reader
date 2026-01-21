import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons'
import { Stack } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name='index' options={{title: 'Home', animation: 'slide_from_right'}} />
                <Stack.Screen 
                    name='reader' 
                    options={{
                        title: 'Reader', 
                        animation: 'fade', 
                        headerRight: () => (
                                            <TouchableOpacity onPress={() => navigate('/(settings)/settings')}>
                                                <SimpleLineIcons name='settings' color='black' size={28}/>
                                            </TouchableOpacity>
                                        )
                    }} 
                />
                <Stack.Screen 
                    name='(settings)'
                    options={{headerShown: false}}
                />
            </Stack>
{/*             <Text style={styles.footer}>Footer</Text> */}
        </>
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