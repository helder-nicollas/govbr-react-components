/* eslint-disable no-unused-vars */
import React, {
    KeyboardEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { SelectContext } from './contexts/select-context';
import { SelectGovBr } from './types';
import { SelectItem } from './select-item';
import { SelectList } from './select-list';
import BRSelect from '@govbr-ds/core/dist/components/select/select';
import { twMerge } from 'tailwind-merge';

type SelectProps = {
    id: string | number;
    children: React.ReactNode;
    className?: string;
    reset?: unknown;
    onChangeValue?(value: string): void;
};

function Select({
    reset,
    children,
    className,
    id,
    onChangeValue,
    ...props
}: SelectProps) {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const [select, setSelect] = useState<SelectGovBr | null>(null);
    const [selected, setSelected] = useState<string>('');

    const selectValue = useMemo(() => {
        if (select)
            return Object.getPrototypeOf(select)._setSelected.bind(select) as (
                index: number,
                element: HTMLDivElement,
            ) => void;
        return null;
    }, [select]);

    const removeSelectedValue = useMemo(() => {
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

    const handleChange = useCallback(
        (value: string) => {
            if (!select) return;
            select?.optionsList?.forEach((option, index) =>
                removeSelectedValue!(index, option.element),
            );
            const optionIndexInGovScript = select?.optionsList?.findIndex(
                option => option.inputValue === String(value),
            );

            if (optionIndexInGovScript === -1) return;

            const optionToChange = select!.optionsList[optionIndexInGovScript!];
            selectValue!(optionIndexInGovScript!, optionToChange.element);
            setSelected(value);
            return onChangeValue?.(value);
        },
        [select, selectValue, removeSelectedValue],
    );

    const handleChangeWithKeyboard = useCallback(
        (event: KeyboardEvent<HTMLDivElement>, value: string) => {
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

    const addDefaultValue = useCallback(
        (value: string, index: number) => {
            if (!selectValue) return;
            setSelected(value);
            selectValue(index, select!.optionsList[index].element);
        },
        [selectValue],
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

    useEffect(() => {
        if (resetOptionsList && removeSelectedValue && select) {
            const optionIndex = select.optionsList.findIndex(
                option => option.inputValue === selected,
            );

            const isExistentOption = optionIndex !== -1;

            if (isExistentOption) {
                removeSelectedValue(
                    optionIndex,
                    select.optionsList[optionIndex].element,
                );
            }
            resetOptionsList();
            setSelected('');
        }
    }, [reset]);

    return (
        <SelectContext.Provider
            value={{
                id,
                selected,
                handleChange,
                handleChangeWithKeyboard,
                addDefaultValue,
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

Select.Item = SelectItem;
Select.List = SelectList;

export { Select, type SelectProps };
