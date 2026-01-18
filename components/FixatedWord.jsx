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

const FixatedWord = ({ word, indentation = 120, height = 50, fontSize = 36, crosshairWidth = 2, crosshairDistance = 16, crosshairHeight = 16 }) => {

    const fixedIndex = getFixationIndex(word)

    const anchorWidth = fontSize * 0.6;

    return (
    <ThemedView style={{alignItems: 'center', marginBottom: 10}}>
        {/* <ThemedView style={{width: '100%', backgroundColor: 'red', alignItems: 'center'}}>
            <ThemedView style={{width: '95%', flexDirection: 'row', backgroundColor: 'black', height: 2}} />
            <ThemedView style={{width: '95%', flexDirection: 'row', backgroundColor: 'green'}}>
                <ThemedView style={{width: indentation - anchorWidth / 2, alignItems: 'flex-end', backgroundColor: 'black', height: 16}} />
            </ThemedView>
        </ThemedView> */}

        {
            //ghost top crosshair for moving the word accordingly
        }
        <ThemedView style={{width: '95%', height: crosshairDistance, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
            <ThemedView style={{backgroundColor: 'rgba(0, 0, 0, 0)', height: crosshairWidth, position: 'absolute', top: 0, left: 0, right: 0}} />
            <ThemedView style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: crosshairWidth, height: crosshairHeight, position: 'absolute', left: indentation - anchorWidth / 2}} />
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

        {
            //1. top crosshair part
            //2. lower crosshair part
        }

        <ThemedView style={{width: '95%', height: crosshairDistance, position: 'absolute', top: 0, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
            <ThemedView style={{backgroundColor: 'black', height: crosshairWidth, position: 'absolute', top: 0, left: 0, right: 0}} />
            <ThemedView style={{backgroundColor: 'black', width: crosshairWidth, height: crosshairHeight, position: 'absolute', left: indentation - anchorWidth / 2}} />
        </ThemedView>

        <ThemedView style={{width: '95%', height: crosshairDistance}}>
            <ThemedView style={{backgroundColor: 'black', 
                                width: crosshairWidth, height: crosshairHeight, 
                                position: 'absolute', left: indentation - anchorWidth / 2, top: crosshairDistance - crosshairHeight}} />
            <ThemedView style={{backgroundColor: 'black', height: crosshairWidth, position: 'absolute', bottom: 0, left: 0, right: 0}} />
        </ThemedView>
    </ThemedView>
    );
};

export default FixatedWord;