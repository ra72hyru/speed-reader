import { Storage } from 'expo-sqlite/kv-store'
import React, { createContext, useContext, useState } from 'react'
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';
import { ThemeProvider as NavigationThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const savedTheme = Storage.getItemSync('theme');
    const [themeName, setThemeName] = useState(savedTheme ?? 'light');
    const defaultColorScheme = useColorScheme();

    const theme = (themeName === 'auto' ? Colors[defaultColorScheme] : Colors[themeName]) ?? Colors.light;

    const changeTheme = (newThemeName) => {
        setThemeName(newThemeName);
        Storage.setItemSync('theme', newThemeName);
    }

    return (
        <ThemeContext.Provider value={{ theme, themeName, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('Use of theme context outside of provider!');
    return context;
}