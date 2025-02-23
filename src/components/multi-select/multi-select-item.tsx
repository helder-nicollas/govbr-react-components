import { ComponentProps, KeyboardEvent, useEffect } from 'react';
import { Checkbox } from '../checkbox';
import { Item } from '../item';
import { useMultiSelect } from './contexts/multi-select-context';

type MultiSelectItemProps = ComponentProps<'div'> & {
    defaultSelected?: boolean;
    value: string;
};

export function MultiSelectItem({
    defaultSelected,
    value,
    children,
    ...props
}: MultiSelectItemProps) {
    const { handleChange, handleChangeWithKeyboard, selectedItems, select } =
        useMultiSelect();

    useEffect(() => {
        if (select) {
            const option = select.optionsList.find(
                option => String(children) === option.value,
            );
            option!.inputValue = value;
        }
    }, [select]);

    useEffect(() => {
        if (defaultSelected) handleChange(value);
    }, [handleChange]);

    return (
        <Item
            {...props}
            selected={selectedItems.includes(value)}
            tabIndex={-1}
            onKeyDown={(event: KeyboardEvent) => {
                handleChangeWithKeyboard(
                    event as KeyboardEvent<HTMLDivElement>,
                    value,
                );
            }}
        >
            <div className="br-checkbox">
                <input
                    id={value}
                    type="checkbox"
                    checked={selectedItems.includes(value)}
                    onChange={() => {}}
                />
                <label
                    htmlFor={value}
                    onClickCapture={event => {
                        handleChange(value);
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {children}
                </label>
            </div>
        </Item>
    );
}
