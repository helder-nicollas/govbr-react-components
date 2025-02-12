export interface ISelectionHandler {
    element: HTMLInputElement;
    handler: () => void;
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
    selected: unknown[];
    component: HTMLDivElement | null;
    optionsList: IOptionObject[];
    selectionHandler: ISelectionHandler[];
}
