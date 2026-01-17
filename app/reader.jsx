import { Pressable, StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Word from '../components/Word';
import FixatedWord from '../components/FixatedWord';
import ThemedTextInput from '../components/ThemedTextInput';
import ThemedRangeInputWithButtons from '../components/ThemedRangeInputWithButtons';
import ControlBar from '../components/ControlBar';

const Reader = () => {
    //const words = ["This", "is", "a", "small", "test.", "Just", "for", "testing", "purposes.", "Here", "desoxyribonukleinsäure", "came", "a", "long", "word."];
    
    const [text, setText] = useState("")
    const [wordsPerMin, setWordsPerMin] = useState(300)

    const words = useMemo(() => {
        return text.split(/\s+/)
    }, [text])

    const [word, setWord] = useState("");
    const [running, setRunning] = useState(false);
    const [paused, setPaused] = useState(false);
    const iRef = useRef(0)
    
    const handleRewind = useCallback(() => {
        console.log("words.length")
        iRef.current = Math.max(iRef.current - 9, 0);
        setWord(words[iRef.current]);
    }, [words])

    const handleForward = useCallback(() => {
        iRef.current = Math.min(iRef.current + 9, words.length - 1);
        setWord(words[iRef.current]);
    }, [words])

    useEffect(() => {
        if (!running || paused)
            return;

        const set = () => {
            const currentI = iRef.current;

            if (currentI >= words.length) {
                setRunning(false);
                iRef.current = 0;
                return;
            }

            setWord(() => words[currentI]);
            iRef.current += 1;
        }

        set();

        const intvl = setInterval(set, 60 / wordsPerMin * 1000)

        return () => clearInterval(intvl);
    }, [running, words, wordsPerMin, paused])

    return (
        <ThemedView style={styles.container}>
            {!running && 
                <ThemedTextInput 
                    style={{margin: 16}} 
                    text={text}
                    onChange={setText}
                    backgroundColorLevel={1}
                />
            }
            <ThemedText>{text}</ThemedText>
            {word !== undefined && <FixatedWord word={word} style={{height: 60, fontSize: 36}}/>}
            {!running && <Pressable onPress={() => setRunning(true)}
                                    style={{width: '50%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', borderRadius: 8, margin: 8}}>
                <ThemedText>
                    Start
                </ThemedText>
            </Pressable>}
            {running && 
                <ControlBar 
                    style={{width: '90%', marginLeft: 8, marginRight: 8, backgroundColor: 'green'}}
                    paused={paused}
                    onPause={setPaused}
                    onRewind={handleRewind}
                    onForward={handleForward}
                />
            }
            <ThemedRangeInputWithButtons wordsPerMinute={wordsPerMin} onChange={setWordsPerMin}/> 
            <ThemedText>{wordsPerMin}</ThemedText>
        </ThemedView>
    )
}

export default Reader

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'stretch'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 16,
        height: '40%'
    }
})