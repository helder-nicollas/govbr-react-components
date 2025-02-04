'use client';
/* eslint-disable no-unused-vars */
import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/select/select.min.css';
import '@govbr-ds/core/dist/components/input/input.min.css';
import '@govbr-ds/core/dist/components/list/list.min.css';
import '@govbr-ds/core/dist/components/item/item.min.css';
import '@govbr-ds/core/dist/components/radio/radio.min.css';
import { SelectContext } from '../contexts/SelectContext';
import { SelectGovBr } from '../types';

interface ISelectProps {
    className?: string;
    onChange?(value: unknown): void;
}

export function Select({ className, onChange }: ISelectProps) {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const [select] = useState<SelectGovBr | null>(null);
    const [selected, setSelected] = useState<unknown>(null);

    const setSelectedValue = useMemo(() => {
        if (select)
            return Object.getPrototypeOf(select)._setSelected.bind(select) as (
                index: number,
                element: HTMLDivElement,
            ) => void;
        return null;
    }, [select]);

    const removeSelected = useMemo(() => {
        if (select)
            return Object.getPrototypeOf(select)._removeSelected.bind(
                select,
            ) as (index: number, element: HTMLDivElement) => void;
        return null;
    }, [select]);

    // const resetOptionsList = useMemo(() => {
    //     if (select)
    //         return Object.getPrototypeOf(select).resetOptionsList.bind(
    //             select,
    //         ) as () => void;
    //     return null;
    // }, [select]);

    const handleChange = (value: unknown) => {
        select?.optionsList?.forEach((option, index) =>
            removeSelected!(index, option.element),
        );
        const optionIndexInGovScript = select?.optionsList?.findIndex(
            option => option.inputValue === value,
        );

        if (optionIndexInGovScript === -1) return;

        const optionToChange = select!.optionsList[optionIndexInGovScript!];

        setSelectedValue!(optionIndexInGovScript!, optionToChange.element);
        setSelected(value);
        return onChange?.(value);
    };

    const handleChangeWithKeyboard = (
        event: KeyboardEvent<HTMLDivElement>,
        value: unknown,
    ) => {
        event.preventDefault();
        switch (event.key) {
            case 'Enter':
                handleChange(value);
                break;
            case ' ':
                handleChange(value);
                break;
        }
    };

    // useEffect(() => {
    //     if (!props.defaultSelected?.value || !select) return;

    //     setSelected(props.defaultSelected.value);
    //     resetOptionsList?.();

    //     const selectedOptionIndex = select?.optionsList?.findIndex(
    //         option =>
    //             option.inputValue ===
    //             props.items.find(
    //                 searchedItem =>
    //                     searchedItem.value === props.defaultSelected?.value,
    //             )?.label,
    //     );

    //     if (selectedOptionIndex === -1) return;

    //     setSelectedValue?.(
    //         selectedOptionIndex,
    //         select?.optionsList?.[selectedOptionIndex]?.element,
    //     );
    // }, [props.defaultSelected, resetOptionsList, setSelectedValue]);

    // useEffect(() => {
    //     if (selectRef.current && !select && props.items.length) {
    //         const brSelect = new BRSelect(
    //             `br-select-${Math.floor(Math.random() * 50)}-${Math.floor(Math.random() * 50)}`,
    //             selectRef.current,
    //         );
    //         setSelect(brSelect);
    //     }
    // }, [select, selectRef]);
    return (
        <SelectContext.Provider
            value={{
                handleChange,
                handleChangeWithKeyboard,
                selected,
            }}
        >
            <div
                ref={selectRef}
                className={twMerge('br-select', className)}
            ></div>
        </SelectContext.Provider>
    );
}
