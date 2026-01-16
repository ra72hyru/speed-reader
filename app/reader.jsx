import { Pressable, StyleSheet, Text, View } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText';
import { useEffect, useState } from 'react';
import Word from '../components/Word';
import FixatedWord from '../components/FixatedWord';

const Reader = () => {
    const words = ["This", "is", "a", "small", "test.", "Just", "for", "testing", "purposes.", "Here", "desoxyribonukleinsäure", "came", "a", "long", "word."];
    
    const [word, setWord] = useState("");
    const [running, setRunning] = useState(false);
    
    useEffect(() => {
        if (!running)
            return;

        setWord(words[0]);
        let i = 0;
        const intvl = setInterval(() => {
            setWord(() => words[i]);
            i++;
            if (i === words.length) {
                clearInterval(intvl);
                setRunning(false);
            }
        }, 1000)

        return () => clearInterval(intvl);
    }, [running])

    const start = () => {
        let i = 0;
        const intvl = setInterval(() => {
            setWord(() => words[i]);
            i++;
            if (i === words.length)
                clearInterval(intvl);
        }, 1000)
    }

    return (
        <ThemedView>
            {/* <ThemedText style={{height: 60, fontSize: 36}}>
                {word}
            </ThemedText> */}
            {word !== undefined && <FixatedWord word={word} style={{height: 60, fontSize: 36}}/>}
            {!running && <Pressable onPress={() => setRunning(true)}
                                    style={{width: '50%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', borderRadius: 8, margin: 8}}>
                <ThemedText>
                    Start
                </ThemedText>
            </Pressable>}
            {running && 
                <Pressable>
                    <ThemedText>Pause</ThemedText>
                </Pressable>}
        </ThemedView>
    )
}

export default Reader

const styles = StyleSheet.create({})