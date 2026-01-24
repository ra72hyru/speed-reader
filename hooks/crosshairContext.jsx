import { createContext, useContext, useState } from "react";
import { Storage } from "expo-sqlite/kv-store";

const CrosshairContext = createContext(undefined);

const defaultCrosshairOptions = {
    crosshairWidth: 90,
    crosshairHeight: 16,
    crosshairLineWidth: 2,
    crosshairDistance: 16
}

export const CrosshairProvider = ({ children }) => {
    const savedCrosshairOptions = JSON.parse(Storage.getItemSync('crosshairOptions'));

    const savedCrosshairWidth = Storage.getItemSync('crosshairWidth');
    const savedCrosshairHeight = Storage.getItemSync('crosshairHeight');
    const savedCrosshairLineWidth = Storage.getItemSync('crosshairLineWidth');
    const savedCrosshairDistance = Storage.getItemSync('crosshairDistance');

    const [crosshairOptions, setCrosshairOptions] = useState(savedCrosshairOptions ?? defaultCrosshairOptions);
    const [crosshairWidth, setCrosshairWidth] = useState(savedCrosshairWidth ?? defaultCrosshairOptions.crosshairWidth);
    const [crosshairHeight, setCrosshairHeight] = useState(savedCrosshairHeight ?? defaultCrosshairOptions.crosshairHeight);
    const [crosshairLineWidth, setCrosshairLineWidth] = useState(savedCrosshairLineWidth ?? defaultCrosshairOptions.crosshairLineWidth);
    const [crosshairDistance, setCrosshairDistance] = useState(savedCrosshairDistance ?? defaultCrosshairOptions.crosshairDistance);

    const changeCrosshairOptions = (newOptions) => {
        setCrosshairOptions(newOptions);
        Storage.setItemSync('crosshairOptions', newOptions);
    }
    
    const changeCrosshairOption = (option, newValue) => {
        let updatedOptions = {
            crosshairWidth,
            crosshairHeight,
            crosshairLineWidth,
            crosshairDistance
        };

        updatedOptions[option] = newValue;

        switch (option) {
            case 'crosshairWidth':
                setCrosshairWidth((prev) => newValue);
                break;
            case 'crosshairHeight':
                setCrosshairHeight((prev) => newValue);
                break;
            case 'crosshairLineWidth':
                setCrosshairLineWidth((prev) => newValue);
                break;
            case 'crosshairDistance':
                setCrosshairDistance((prev) => newValue);
                break;
            default:
                break;
        }
        setCrosshairOptions(updatedOptions);
        Storage.setItemSync('crosshairOptions', JSON.stringify(updatedOptions));
        console.log('Saved crosshair: ', updatedOptions);
    }

    return (
        <CrosshairContext.Provider value={{crosshairOptions, setCrosshairOption: changeCrosshairOption}}>
            {children}
        </CrosshairContext.Provider>
    )
}

export const useCrosshair = () => {
    const context = useContext(CrosshairContext);
    if (!context)
        throw new Error('Use of crosshair context outside of provider!');
    return context;
}