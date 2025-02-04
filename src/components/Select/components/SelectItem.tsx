import { twMerge } from 'tailwind-merge';
import { useSelect } from '../contexts/SelectContext';
import { ComponentProps } from 'react';

interface IProps extends ComponentProps<'div'> {
    value: unknown;
}

export function SelectItem({ className, value, children, ...props }: IProps) {
    const { handleChangeWithKeyboard, selected, handleChange } = useSelect();
    return (
        <div
            className={twMerge(
                'br-item',
                selected === value && 'selected',
                className,
            )}
            tabIndex={-1}
            {...props}
        >
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
        </div>
    );
}
