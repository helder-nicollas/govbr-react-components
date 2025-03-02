import { createContext, useContext } from 'react';
import { IMultiSelectContext } from '../types';

export const MultiSelectContext = createContext({} as IMultiSelectContext);

export const useMultiSelect = () => {
    const context = useContext(MultiSelectContext);
    return context;
};
