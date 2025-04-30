import { KeyboardEvent } from 'react';

/* eslint-disable no-unused-vars */
export interface ISelectionHandler {
    element: HTMLInputElement;
    handler: () => void;
}

export interface IOptionObject {
    element: HTMLDivElement;
    focus: boolean;
    selected: boolean;
    value: string;
    inputValue: string;
}

export interface IMultiSelectContext {
    id: string | number;
    selectedItems: string[];
    select: ISelectGovBr | null;
    allSelected: boolean;
    handleChange(value: string): void;
    handleChangeWithKeyboard: (
        event: KeyboardEvent<HTMLDivElement>,
        value: string,
    ) => void;
    handleChangeAll(): void;
    handleChangeAllWithKeyboard(event: KeyboardEvent<HTMLDivElement>): void;
    addDefaultValue(value: string, index: number): void;
}

export interface ISelectGovBr {
    _setBehavior: () => void;
    _setDropdownBehavior: () => void;
    _setKeyboardBehavior: () => void;
    _setSelectionBehavior: () => void;
    _setFilterBehavior: () => void;
    _prepareComponent: () => void;
    resetOptionsList: () => void;
    selected: unknown[];
    component: HTMLDivElement | null;
    optionsList: IOptionObject[];
    selectionHandler: ISelectionHandler[];
}

export interface ISelectItem {
    label: string;
    value: unknown;
}
