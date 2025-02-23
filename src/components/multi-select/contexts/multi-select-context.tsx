/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';
import { KeyboardEvent } from 'react';
import { ISelectGovBr } from '../types';
interface MultiSelectContext {
    handleChange(value: string): void;
    handleChangeWithKeyboard: (
        event: KeyboardEvent<HTMLDivElement>,
        value: string,
    ) => void;
    handleChangeAll(): void;
    handleChangeAllWithKeyboard(event: KeyboardEvent<HTMLDivElement>): void;
    selectedItems: string[];
    select: ISelectGovBr | null;
    allSelected: boolean;
}

export const MultiSelectContext = createContext({} as MultiSelectContext);

export const useMultiSelect = () => {
    const context = useContext(MultiSelectContext);
    return context;
};
