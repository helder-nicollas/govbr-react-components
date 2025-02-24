import { createContext, useContext } from 'react';
import { ISelectContext } from '../types';

export const SelectContext = createContext({} as ISelectContext);

export const useSelect = () => {
    const context = useContext(SelectContext);
    return context;
};
