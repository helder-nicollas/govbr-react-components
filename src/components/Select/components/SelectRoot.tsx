'use client';
/* eslint-disable no-unused-vars */
import React, {
    ComponentProps,
    KeyboardEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import BRSelect from '@govbr-ds/core/dist/components/select/select';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/select/select.min.css';
import '@govbr-ds/core/dist/components/list/list.min.css';
import '@govbr-ds/core/dist/components/item/item.min.css';
import '@govbr-ds/core/dist/components/radio/radio.min.css';
import { SelectContext } from '../contexts/SelectContext';
import { SelectGovBr } from '../types';

interface ISelectProps extends ComponentProps<'div'> {
    className?: string;
    children: React.ReactNode;
    onChange?(value: unknown): void;
}

export function SelectRoot({
    className,
    onChange,
    children,
    ...props
}: ISelectProps) {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const [select, setSelect] = useState<SelectGovBr | null>(null);
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

    const handleChange = useCallback(
        (value: unknown) => {
            if (!select) return;
            select?.optionsList?.forEach((option, index) =>
                removeSelected!(index, option.element),
            );
            const optionIndexInGovScript = select?.optionsList?.findIndex(
                option => option.inputValue === String(value),
            );

            if (optionIndexInGovScript === -1) return;

            const optionToChange = select!.optionsList[optionIndexInGovScript!];
            setSelectedValue!(optionIndexInGovScript!, optionToChange.element);
            setSelected(value);
            return onChange?.(value);
        },
        [select, setSelectedValue, removeSelected],
    );

    const handleChangeWithKeyboard = useCallback(
        (event: KeyboardEvent<HTMLDivElement>, value: unknown) => {
            event.preventDefault();
            switch (event.key) {
                case 'Enter':
                    handleChange(value);
                    break;
                case ' ':
                    handleChange(value);
                    break;
            }
        },
        [handleChange],
    );

    useEffect(() => {
        if (selectRef.current && !select) {
            const brSelect = new BRSelect(
                `br-select-${Math.floor(Math.random() * 50)}-${Math.floor(Math.random() * 50)}`,
                selectRef.current,
            );
            setSelect(brSelect);
        }
    }, [select, selectRef]);

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
                {...props}
            >
                {children}
            </div>
        </SelectContext.Provider>
    );
}
