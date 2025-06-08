import { ComponentProps, KeyboardEvent, useEffect } from 'react';
import { Checkbox, CheckboxField } from '../checkbox';
import { Item } from '../item';
import { useMultiSelect } from './contexts/multi-select-context';

type MultiSelectItemProps = ComponentProps<'div'> & {
    defaultSelected?: boolean;
    index: number;
    value: string;
};

export function MultiSelectItem({
    defaultSelected,
    value,
    index,
    children,
    ...props
}: MultiSelectItemProps) {
    const {
        id,
        selectedItems,
        select,
        handleChange,
        handleChangeWithKeyboard,
        addDefaultValue,
    } = useMultiSelect();

    useEffect(() => {
        if (select) {
            const option = select.optionsList.find(
                option => String(children) === option.value,
            );
            option!.inputValue = value;

            if (defaultSelected) addDefaultValue(value, index);
        }
    }, [select, addDefaultValue]);

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
                <CheckboxField
                    id={`${id}-${value}`}
                    name={`${id}-${value}`}
                    checked={selectedItems.includes(value)}
                    onChange={() => {}}
                />
                <label
                    htmlFor={`${id}-${value}`}
                    onClickCapture={event => {
                        handleChange(value);
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {children}
                </label>
            </Checkbox>
        </Item>
    );
}
