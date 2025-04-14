import { createContext, useContext } from 'react';
import { IMultiSelectContext } from '../types';

export const MultiSelectContext = createContext({} as IMultiSelectContext);

export const useMultiSelect = () => {
    const context = useContext(MultiSelectContext);
    if (!context)
        throw new Error(
            'O hook useMultiSelect deve ser utilizado em um componente filho de MultiSelect.',
        );
    return context;
};
