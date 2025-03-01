import { useSelect } from './contexts/select-context';
import { ComponentProps, useEffect } from 'react';
import { Item } from '../item';

interface IProps extends ComponentProps<'div'> {
    defaultSelected?: boolean;
    value: string;
    index: number;
}

export function SelectItem({
    value,
    defaultSelected,
    children,
    index,
    ...props
}: IProps) {
    const {
        handleChangeWithKeyboard,
        addDefaultValue,
        handleChange,
        selected,
    } = useSelect();

    useEffect(() => {
        if (defaultSelected) addDefaultValue(value, index);
    }, [handleChange]);

    return (
        <Item selected={selected === value} tabIndex={-1} {...props}>
            <div className="br-radio">
                <input
                    id={String(value)}
                    type="radio"
                    name={String(value)}
                    value={String(value)}
                    checked={selected === value}
                    onChange={() => {}}
                    onKeyDown={event => {
                        handleChangeWithKeyboard(event, value);
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                    onClick={event => {
                        handleChange?.(value);
                        event.preventDefault();
                    }}
                />
                <label htmlFor={String(value)}>{children}</label>
            </div>
        </Item>
    );
}
