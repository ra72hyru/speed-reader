import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";

const getFixationIndex = (word) => {
    if (word.length <= 1) return 0;
    if (word.length <= 5) return 1;
    if (word.length <= 9) return 2;
    return 3;
};

const FixatedWord = ({ word, style, indentation = 120, height = 50, fontSize = 36 }) => {

    const fixedIndex = getFixationIndex(word)

    const anchorWidth = fontSize * 0.6;

    return (
        /* <ThemedView style={{width: '100%', backgroundColor: 'red', alignItems: 'center'}}>
            <ThemedView style={{width: '95%', flexDirection: 'row', backgroundColor: 'black', height: 2}} />
            <ThemedView style={{width: '95%', flexDirection: 'row', backgroundColor: 'green'}}>
                <ThemedView style={{width: indentation - anchorWidth / 2, alignItems: 'flex-end', backgroundColor: 'black', height: 16}} />
            </ThemedView>
        </ThemedView> */

        <ThemedView style={[{width: '100%', flexDirection: 'row', borderWidth: 0, alignItems: 'center'}, style]}>
            <ThemedView style={[{width: indentation - anchorWidth, alignItems: 'flex-end', fontSize}, styles.innerView]}>
                <ThemedText style={{fontSize, fontFamily: 'monospace'}}>{word.slice(0, fixedIndex)}</ThemedText>
            </ThemedView>
            <ThemedView style={[{width: anchorWidth, alignItems: 'center'}, styles.innerView]}>
                <ThemedText style={{color: 'red', fontSize, fontFamily: 'monospace'}}>{word.slice(fixedIndex, fixedIndex + 1)}</ThemedText>
            </ThemedView>
            <ThemedView style={[{flex: 1, alignItems: 'flex-start'}, styles.innerView]}>
                <ThemedText style={{fontSize, fontFamily: 'monospace'}}>{word.slice(fixedIndex + 1)}</ThemedText>
            </ThemedView>
        </ThemedView>
    );
};

export default FixatedWord;

const styles = StyleSheet.create({
    innerView: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
});