import { ComponentProps, KeyboardEvent, useEffect } from 'react';
import { Checkbox } from '../checkbox';
import { Item } from '../item';
import { useMultiSelect } from './contexts/multi-select-context';
import { Label } from '../label';

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
        if (defaultSelected && select) handleChange(value);
    }, [select]);

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
            <Checkbox>
                <Checkbox.Field
                    id={value}
                    checked={selectedItems.includes(value)}
                    onChange={() => {}}
                />
                <Label
                    htmlFor={value}
                    onClickCapture={event => {
                        handleChange(value);
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {children}
                </Label>
            </Checkbox>
        </Item>
    );
}
