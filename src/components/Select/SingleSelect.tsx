/* eslint-disable no-unused-vars */
'use client';

import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import BRSelect from '@govbr-ds/core/dist/components/select/select';
import '@govbr-ds/core/dist/components/select/select.min.css';
import '@govbr-ds/core/dist/components/input/input.min.css';
import '@govbr-ds/core/dist/components/list/list.min.css';
import '@govbr-ds/core/dist/components/item/item.min.css';
import '@govbr-ds/core/dist/components/radio/radio.min.css';

interface ISingleSelectProps {
    id: string;
    label: string;
    items: { value: unknown; label: string }[];
    className?: string;
    defaultSelected?: { value: unknown; label: string };

    onChange?(item: { value: unknown; label: string }): void;
    message?: string;
    placeholder?: string;
}

interface ISelectionHandler {
    element: HTMLInputElement;
    handler: () => void;
}

interface IOptionObject {
    element: HTMLDivElement;
    focus: boolean;
    selected: boolean;
    inputValue: string;
}

interface SelectGovBr {
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

interface ISelectItem {
    label: string;
    value: unknown;
}

export function SingleSelect(props: ISingleSelectProps) {
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

    const resetOptionsList = useMemo(() => {
        if (select)
            return Object.getPrototypeOf(select).resetOptionsList.bind(
                select,
            ) as () => void;
        return null;
    }, [select]);

    const handleChange = (item: ISelectItem) => {
        select?.optionsList?.forEach((option, index) =>
            removeSelected!(index, option.element),
        );
        const optionIndexInGovScript = select?.optionsList?.findIndex(
            option => option.inputValue === item.value,
        );

        console.log(select?.optionsList);
        if (optionIndexInGovScript === -1) return;

        const optionToChange = select!.optionsList[optionIndexInGovScript!];

        setSelectedValue!(optionIndexInGovScript!, optionToChange.element);
        setSelected(item.value);
        return props.onChange?.(item);
    };

    const handleChangeWithKeyboard = (
        event: KeyboardEvent<HTMLDivElement>,
        item: ISelectItem,
    ) => {
        event.preventDefault();
        switch (event.key) {
            case 'Enter':
                handleChange(item);
                break;
            case ' ':
                handleChange(item);
                break;
        }
    };

    useEffect(() => {
        if (!props.defaultSelected?.value || !select) return;

        setSelected(props.defaultSelected.value);
        resetOptionsList?.();

        const selectedOptionIndex = select?.optionsList?.findIndex(
            option =>
                option.inputValue ===
                props.items.find(
                    searchedItem =>
                        searchedItem.value === props.defaultSelected?.value,
                )?.label,
        );

        if (selectedOptionIndex === -1) return;

        setSelectedValue?.(
            selectedOptionIndex,
            select?.optionsList?.[selectedOptionIndex]?.element,
        );
    }, [props.defaultSelected, resetOptionsList, setSelectedValue]);

    useEffect(() => {
        if (selectRef.current && !select && props.items.length) {
            const brSelect = new BRSelect(
                `br-select-${Math.floor(Math.random() * 50)}-${Math.floor(Math.random() * 50)}`,
                selectRef.current,
            );
            setSelect(brSelect);
        }
    }, [select, selectRef]);

    return (
        <div ref={selectRef} className={twMerge('br-select', props.className)}>
            <div className="br-input">
                <label htmlFor={props.id} className="dark:text-white">
                    {props.label}
                </label>
                <input
                    id={props.id}
                    type="text"
                    autoComplete="off"
                    placeholder={props.placeholder || 'Selecione um item'}
                />
                <button
                    className="br-button"
                    type="button"
                    aria-label="Exibir lista"
                    tabIndex={-1}
                    data-trigger="data-trigger"
                >
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </button>
                {props.message && (
                    <span className="danger feedback" role="alert">
                        <i className="fas fa-times-circle" aria-hidden="true" />
                        {props.message}
                    </span>
                )}
            </div>
            <div className="br-list" tabIndex={0}>
                {props.items.map(item => (
                    <div
                        className={twMerge(
                            'br-item',
                            selected === item.value && 'selected',
                        )}
                        tabIndex={-1}
                        key={'single' + props.id + item.label}
                    >
                        <div className="br-radio">
                            <input
                                id={props.id + '-' + item.value}
                                type="radio"
                                name={'' + item.label}
                                value={'' + item.value}
                                checked={selected === item.value}
                                onChange={() => {}}
                                onKeyDown={event => {
                                    handleChangeWithKeyboard(event, item);
                                    event.preventDefault();
                                    event.stopPropagation();
                                    event.nativeEvent.stopImmediatePropagation();
                                }}
                                onClick={event => {
                                    handleChange(item);
                                    event.preventDefault();
                                }}
                            />
                            <label htmlFor={props.id + '-' + item.value}>
                                {item.label}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
