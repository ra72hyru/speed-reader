import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";

const getFixationIndex = (word) => {
    if (word.length <= 1) return 0;
    if (word.length <= 5) return 1;
    if (word.length <= 9) return 2;
    return 3;
};

const FixatedWord = ({ word, indentation = 120, height = 60, fontSize = 36 }) => {

    const fixedIndex = getFixationIndex(word)

    const anchorWidth = fontSize * 0.6;

    return (
    <ThemedView style={{height: height, width: '100%', flexDirection: 'row'}}>
        <ThemedView style={{width: indentation - anchorWidth / 2, alignItems: 'flex-end', fontSize}}>
            <ThemedText style={{fontSize, fontFamily: 'monospace'}}>{word.slice(0, fixedIndex)}</ThemedText>
        </ThemedView>
        <ThemedView style={{width: anchorWidth, alignItems: 'center'}}>
            <ThemedText style={{color: 'red', fontSize, fontFamily: 'monospace'}}>{word.slice(fixedIndex, fixedIndex + 1)}</ThemedText>
        </ThemedView>
        <ThemedView style={{flex: 1, alignItems: 'flex-start'}}>
            <ThemedText style={{fontSize, fontFamily: 'monospace'}}>{word.slice(fixedIndex + 1)}</ThemedText>
        </ThemedView>
    </ThemedView>
    );
};

export default FixatedWord;