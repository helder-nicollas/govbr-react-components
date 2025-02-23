/* eslint-disable no-unused-vars */
import {
    KeyboardEvent,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ISelectGovBr } from './types';
import { MultiSelectContext } from './contexts/multi-select-context';
import BRSelect from '@govbr-ds/core/dist/components/select/select';
import '@govbr-ds/core/dist/components/select/select.min.css';
import { MultiSelectItem } from './multi-select-item';
import { MultiSelectList } from './multi-select-list';
import { MultiSelectAllItems } from './multi-select-all-items';

interface IMultiSelectProps {
    onChangeValue?(items: string[]): void;
    children: ReactNode;
}

function MultiSelect({ children, onChangeValue }: IMultiSelectProps) {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const [select, setSelect] = useState<ISelectGovBr | null>(null);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

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

    const allSelected = useMemo(() => {
        if (select)
            return selectedItems.length === select.optionsList.length - 1;
        else return false;
    }, [select, selectedItems]);

    const handleChange = (value: string) => {
        if (!select || !removeSelectedValue || !selectValue) return;

        const optionIndexInGovScript = select.optionsList.findIndex(
            option => option.inputValue === value,
        );
        if (optionIndexInGovScript === -1) return;

        const newSelectedItems = [...selectedItems];
        const itemIndex = newSelectedItems.findIndex(
            searchedItem => searchedItem === value,
        );
        const isExistentItem = itemIndex !== -1;

        if (isExistentItem) {
            newSelectedItems.splice(itemIndex, 1);
            removeSelectedValue(
                optionIndexInGovScript,
                select.optionsList[optionIndexInGovScript].element,
            );
            setSelectedItems(newSelectedItems);
            return onChangeValue?.(newSelectedItems);
        }

        selectValue(
            optionIndexInGovScript,
            select.optionsList[optionIndexInGovScript].element,
        );
        setSelectedItems(state => [...state, value]);
        return onChangeValue?.(newSelectedItems);
    };

    const handleChangeAll = useCallback(() => {
        if (!select) return;
        const newSelectedItems: string[] = [];
        console.log('here');

        if (allSelected) {
            setSelectedItems(newSelectedItems);
            select.optionsList.forEach((option, index) => {
                if (index > 0) {
                    removeSelectedValue!(index, option.element);
                }
            });
            return onChangeValue?.(newSelectedItems);
        }

        select.optionsList.forEach((option, index) => {
            if (index > 0) {
                selectValue!(index, option.element);
                newSelectedItems.push(option.inputValue);
            }
        });
        setSelectedItems(newSelectedItems);
        onChangeValue?.(newSelectedItems);
    }, [select, allSelected, selectedItems]);

    const handleChangeAllWithKeyboard = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            event.preventDefault();
            switch (event.key) {
                case 'Enter':
                    handleChangeAll();
                    break;
                case ' ':
                    handleChangeAll();
                    break;
            }
        },
        [handleChangeAll],
    );

    const handleChangeWithKeyboard = (
        event: KeyboardEvent<HTMLDivElement>,
        value: string,
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

    useEffect(() => {
        if (selectRef.current && !select) {
            selectRef.current.setAttribute('multiple', 'multiple');

            const brSelect: ISelectGovBr = new BRSelect(
                `br-select-${Math.floor(Math.random() * 50)}-${Math.floor(Math.random() * 50)}`,
                selectRef.current,
            );
            setSelect(brSelect);
        }
    }, [select, selectRef]);

    return (
        <MultiSelectContext.Provider
            value={{
                handleChange,
                handleChangeWithKeyboard,
                handleChangeAll,
                handleChangeAllWithKeyboard,
                selectedItems,
                select,
                allSelected,
            }}
        >
            <div ref={selectRef} className="br-select">
                {children}
            </div>
        </MultiSelectContext.Provider>
    );
}

MultiSelect.Item = MultiSelectItem;
MultiSelect.List = MultiSelectList;
MultiSelect.SelectAll = MultiSelectAllItems;

export { MultiSelect, IMultiSelectProps };
