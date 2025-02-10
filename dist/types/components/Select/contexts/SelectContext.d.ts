import { KeyboardEvent } from 'react';
interface ISelectContext {
    handleChange(value: unknown): void;
    handleChangeWithKeyboard: (event: KeyboardEvent<HTMLDivElement>, value: unknown) => void;
    selected: unknown;
}
export declare const SelectContext: import("react").Context<ISelectContext>;
export declare const useSelect: () => ISelectContext;
export {};
