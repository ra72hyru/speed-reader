import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Color'
import ThemedView from './ThemedView'

const ThemedCrosshair = ({ children, style, indentation = 120, fontSize = 36, crosshairLineWidth = 2, crosshairDistance = 16, crosshairWidth=95, crosshairHeight = 16 }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const anchorWidth = fontSize * 0.6;

    return (
        <ThemedView style={[{alignItems: 'center', marginBottom: 10}, style]}>
            {
                //ghost top crosshair for moving the word accordingly
            }
            <ThemedView style={{width: `100%`, height: crosshairDistance, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <ThemedView style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: `${crosshairWidth}%`, height: crosshairLineWidth, position: 'absolute', top: 0, left: 0, right: 0}} />
                <ThemedView style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: crosshairLineWidth, height: crosshairHeight, position: 'absolute', left: indentation - anchorWidth / 2}} />
            </ThemedView>

            {children}
            
            {
                //1. top crosshair part
                //2. lower crosshair part
            }

            <ThemedView style={{width: `100%`, height: crosshairDistance, position: 'absolute', top: 0, backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center'}}>
                <ThemedView style={{backgroundColor: theme.text, width: `${crosshairWidth}%`, height: crosshairLineWidth, position: 'relative', top: 0, left: 0, right: 0}} />
                <ThemedView style={{backgroundColor: theme.text, width: crosshairLineWidth, height: crosshairHeight, position: 'absolute', left: indentation - anchorWidth / 2 - crosshairLineWidth / 2, top: crosshairLineWidth - 1}} />
            </ThemedView>

            <ThemedView style={{width: `100%`, height: crosshairDistance, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <ThemedView style={{backgroundColor: theme.text, 
                                    width: crosshairLineWidth, height: crosshairHeight, 
                                    position: 'absolute', left: indentation - anchorWidth / 2 - crosshairLineWidth / 2, top: crosshairDistance - crosshairHeight}} />
                <ThemedView style={{backgroundColor: theme.text, width: `${crosshairWidth}%`, height: crosshairLineWidth, position: 'relative', top: crosshairDistance, bottom: 0, left: 0, right: 0}} />
            </ThemedView>
        </ThemedView>
    )
}

export default ThemedCrosshair