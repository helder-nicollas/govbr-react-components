import { createContext, useContext } from 'react';
import { ISelectContext } from '../types';

export const SelectContext = createContext({} as ISelectContext);

export const useSelect = () => {
    const context = useContext(SelectContext);
    if (!context)
        throw new Error(
            'O hook useSelect deve ser utilizado em um componente filho de Select.',
        );
    return context;
};
