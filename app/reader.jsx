import { Pressable, StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Word from '../components/Word';
import FixatedWord from '../components/FixatedWord';
import ThemedTextInput from '../components/ThemedTextInput';
import ThemedRangeInputWithButtons from '../components/ThemedRangeInputWithButtons';
import ControlBar from '../components/ControlBar';
import ThemedCrosshair from '../components/ThemedCrosshair';
import Reader from '../components/Reader';

const ReaderPage = () => {
    //const words = ["This", "is", "a", "small", "test.", "Just", "for", "testing", "purposes.", "Here", "desoxyribonukleinsäure", "came", "a", "long", "word."];
    
    const [text, setText] = useState("")
    const [wordsPerMin, setWordsPerMin] = useState(300)

    const words = useMemo(() => {
        return text.split(/\s+/)
    }, [text])

    const [word, setWord] = useState("");
    const [running, setRunning] = useState(false);
    const [paused, setPaused] = useState(false);

    const startTimeRef = useRef(null)
    const startIndexRef = useRef(0)
    const currentIndexRef = useRef(0)
    const rafRef = useRef(null)
    
    const start = () => {
        startIndexRef.current = 0;
        currentIndexRef.current = 0;
        startTimeRef.current = null;
        setPaused(false);
        setRunning(true);
    }

    const pause = () => {
        startIndexRef.current = currentIndexRef.current;
        startTimeRef.current = null;
        setPaused(prev => !prev);
    }

    const seekIndex = (newIndex) => {
        const clampedIndex = Math.max(0, Math.min(words.length - 1, newIndex));
        startIndexRef.current = clampedIndex;
        currentIndexRef.current = clampedIndex;
        startTimeRef.current = null;
        setWord(words[clampedIndex]);
    }

    const handleGoToStart = () => {
        startIndexRef.current = 0;
        currentIndexRef.current = 0;
        startTimeRef.current = null;
        setWord(words[0] ?? "");
    }

    const handleGoToEnd = () => {
        setRunning(false);
        setPaused(false);
        startIndexRef.current = 0;
        currentIndexRef.current = 0;
        startTimeRef.current = null;
    }

    useEffect(() => {
        if (!running || paused)
            return;

        const msPerWord = 60000 / wordsPerMin;

        const tick = (currTime) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currTime;
            }

            const elapsedTime = currTime - startTimeRef.current;
            const index = startIndexRef.current + Math.floor(elapsedTime / msPerWord);
            if (index >= words.length) {
                setRunning(false);
                return;
            }

            currentIndexRef.current = index;
            setWord(words[index]);

            rafRef.current = requestAnimationFrame(tick);
        }

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafRef.current);
        }

    }, [running, paused, wordsPerMin])

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

            {running ?
                <Reader 
                    word={word} 
                    paused={paused} 
                    onPause={pause} 
                    onRewind={() => seekIndex(currentIndexRef.current - 10)} 
                    onForward={() => seekIndex(currentIndexRef.current + 10)} 
                    onStart={handleGoToStart} 
                    onEnd={handleGoToEnd}
                /> 
                :
                <Pressable 
                    onPress={start}
                    style={{width: '50%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', borderRadius: 8, margin: 8}}
                >
                    <ThemedText>
                        Start
                    </ThemedText>
                </Pressable>
            }

            <ThemedRangeInputWithButtons 
                value={wordsPerMin} 
                onChange={setWordsPerMin}
            /> 

            <ThemedText>{wordsPerMin}</ThemedText>
        </ThemedView>
    )
}

export default ReaderPage

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