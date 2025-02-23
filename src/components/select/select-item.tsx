import { useSelect } from './contexts/select-context';
import { ComponentProps, useEffect } from 'react';
import { Item } from '../item';

interface IProps extends ComponentProps<'div'> {
    defaultSelected?: boolean;
    value: unknown;
}

export function SelectItem({
    value,
    defaultSelected,
    children,
    ...props
}: IProps) {
    const { handleChangeWithKeyboard, selected, handleChange } = useSelect();

    useEffect(() => {
        if (defaultSelected) handleChange(value);
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
