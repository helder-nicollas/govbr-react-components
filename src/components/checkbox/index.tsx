import '@govbr-ds/core/dist/components/checkbox/checkbox.min.css';
import { ComponentProps, useEffect, useRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './variants';

type CheckboxProps = ComponentProps<'input'> &
    VariantProps<typeof checkboxVariants> & {
        label?: string;
    };

function Checkbox({
    className,
    variant,
    label,
    withoutLabel,
    disabled,
    ...props
}: CheckboxProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            if (disabled) inputRef.current.setAttribute('disabled', 'disabled');
            else inputRef.current.removeAttribute('disabled');
        }
    }, [inputRef, disabled]);

    return (
        <div
            className={checkboxVariants({
                className,
                withoutLabel,
                variant,
            })}
        >
            <input
                {...props}
                role="checkbox"
                type="checkbox"
                id={props.id}
                ref={inputRef}
            />
            <label htmlFor={props.id}>{label}</label>
        </div>
    );
}

export { Checkbox, CheckboxProps };
