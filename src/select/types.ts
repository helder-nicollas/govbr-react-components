/* eslint-disable no-unused-vars */
import { KeyboardEvent } from 'react';

export interface ISelectionHandler {
    element: HTMLInputElement;
    handler: () => void;
}

export interface ISelectContext {
    handleChange(value: string): void;
    handleChangeWithKeyboard: (
        event: KeyboardEvent<HTMLDivElement>,
        value: string,
    ) => void;
    addDefaultValue(value: string, index: number): void;
    selected: string;
    id: string | number;
}

export interface IOptionObject {
    element: HTMLDivElement;
    focus: boolean;
    selected: boolean;
    inputValue: string;
}

export interface SelectGovBr {
    _setBehavior: () => void;
    _setDropdownBehavior: () => void;
    _setKeyboardBehavior: () => void;
    _setSelectionBehavior: () => void;
    _setFilterBehavior: () => void;
    _prepareComponent: () => void;
    resetOptionsList: () => void;
    selected: string[];
    component: HTMLDivElement | null;
    optionsList: IOptionObject[];
    selectionHandler: ISelectionHandler[];
}
