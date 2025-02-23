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
