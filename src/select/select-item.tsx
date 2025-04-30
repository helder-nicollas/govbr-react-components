import { useSelect } from './contexts/select-context';
import { ComponentProps, useEffect } from 'react';
import { Item } from '../item';
import { Radio } from '../radio';

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
        selected,
        id,
        handleChangeWithKeyboard,
        addDefaultValue,
        handleChange,
    } = useSelect();

    useEffect(() => {
        if (defaultSelected) addDefaultValue(value, index);
    }, [handleChange]);

    return (
        <Item selected={selected === value} tabIndex={-1} {...props}>
            <Radio className="br-radio">
                <Radio.Field
                    id={`${id}-${value}`}
                    name={`${id}-${value}`}
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
                <label htmlFor={`${id}-${value}`}>{children}</label>
            </Radio>
        </Item>
    );
}
