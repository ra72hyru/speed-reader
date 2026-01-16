import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name='index' options={{title: 'Home', animation: 'slide_from_right'}} />
            </Stack>
            <Text style={styles.footer}>Footer</Text>
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