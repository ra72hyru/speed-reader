import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../hooks/themeContext';

const ThemeSettings = () => {
    const {theme, themeName, setTheme} = useTheme();

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Color Theme</ThemedText>
            <TouchableOpacity onPress={() => setTheme('auto')}>
                <ThemedView style={styles.settingContainer}>
                    <Ionicons 
                        name={themeName === 'auto' ? 'radio-button-on' : 'radio-button-off'}
                        size={28}    
                        color={theme.text}
                    />
                    <ThemedText style={styles.settingTitle}>System Default</ThemedText>
                </ThemedView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTheme('light')}>
                <ThemedView style={styles.settingContainer}>
                    <Ionicons 
                        name={themeName === 'light' ? 'radio-button-on' : 'radio-button-off'}
                        size={28}    
                        color={theme.text}
                    />
                    <ThemedText style={styles.settingTitle}>Light</ThemedText>
                </ThemedView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTheme('dark')}>
                <ThemedView style={styles.settingContainer}>
                    <Ionicons 
                        name={themeName === 'dark' ? 'radio-button-on' : 'radio-button-off'} 
                        size={28}   
                        color={theme.text} 
                    />
                    <ThemedText style={styles.settingTitle}>Dark</ThemedText>
                </ThemedView>
            </TouchableOpacity>
        </ThemedView>
    )
}

export default ThemeSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        marginTop: 12,
        gap: 28
        //alignItems: 'center',
    },
    settingContainer: {
        paddingLeft: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 24
    },
    title: {
        fontSize: 32,
        marginLeft: 24
    },
    settingTitle: {
        fontSize: 24,
    }
})