import { StyleSheet, Text, View } from 'react-native'
import ThemedView from './ThemedView'
import ThemedText from './ThemedText'
import { useEffect, useState } from 'react'

const Word = ({ word, indentation = 50, height = 60, fontSize = 36 }) => {
    
    if (!word || word.length === 0)
        return null;
    
    let fixedIndex = 1;
    
    if (word.length === 1)
        fixedIndex = 0
    else if (word.length <= 5)
        fixedIndex = 1
    else if (word.length <= 9)
        fixedIndex = 2
    else 
        fixedIndex = 3
    
    
    const left = word.slice(0, fixedIndex)
    const markedLetter = word.slice(fixedIndex, fixedIndex + 1)
    const right = word.slice(fixedIndex + 1)
    
    const [leftWidth, setLeftWidth] = useState(null)
    
    useEffect(() => {setLeftWidth(null)}, [left])
    
    return (
        <ThemedView style={{position: 'relative', height: height}}>
            <ThemedText style={{position: 'absolute', left: -9999, fontSize: fontSize}} onLayout={e => {if (leftWidth !== null) {setLeftWidth(e.nativeEvent.layout.width)}}}>
                {left}
            </ThemedText>

            {leftWidth !== null && (<ThemedText style={{position: 'absolute', left: indentation - (leftWidth ?? 0), fontSize: fontSize, opacity: leftWidth === null ? 0 : 1}}>
                <ThemedText>{left}</ThemedText>

                <ThemedText style={{color: 'red'}}>{markedLetter}</ThemedText>
                
                <ThemedText>{right}</ThemedText>
            </ThemedText>)}
        </ThemedView>
    )
}

export default Word

const styles = StyleSheet.create({})