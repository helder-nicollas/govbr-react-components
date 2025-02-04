/* eslint-disable no-unused-vars */
'use client';
import { createContext, useContext } from 'react';
import { KeyboardEvent } from 'react';
interface ISelectContext {
    handleChange?(value: unknown): void;
    handleChangeWithKeyboard: (
        event: KeyboardEvent<HTMLDivElement>,
        value: unknown,
    ) => void;
    selected: unknown;
}

export const SelectContext = createContext({} as ISelectContext);

export const useSelect = () => {
    const context = useContext(SelectContext);
    return context;
};
