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

const FixatedWord = ({ word, indentation = 120, height = 50, fontSize = 36 }) => {

    const fixedIndex = getFixationIndex(word)

    const anchorWidth = fontSize * 0.6;

    return (
    <ThemedView style={{alignItems: 'center', marginBottom: 10}}>
        <ThemedView style={{width: '95%', flexDirection: 'row', borderTopWidth: 2}}>
            <ThemedView style={{width: indentation - anchorWidth / 2, alignItems: 'flex-end', borderRightWidth: 2, height: 16}}></ThemedView>
        </ThemedView>

        <ThemedView style={{width: '100%', flexDirection: 'row', borderWidth: 0, alignItems: 'center'}}>
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

        <ThemedView style={{width: '95%', flexDirection: 'row', borderBottomWidth: 2, padding: 0}}>
            <ThemedView style={{width: indentation - anchorWidth / 2, alignItems: 'flex-end', borderRightWidth: 2, height: 16}}></ThemedView>
        </ThemedView>
    </ThemedView>
    );
};

export default FixatedWord;