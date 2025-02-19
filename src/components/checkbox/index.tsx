import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './variants';
import '@govbr-ds/core/dist/components/checkbox/checkbox.min.css';

type CheckboxProps = ComponentProps<'input'> &
    VariantProps<typeof checkboxVariants> & {
        label?: string;
    };

function Checkbox({
    className,
    variant,
    label,
    disabled,
    withoutLabel,
    ...props
}: CheckboxProps) {
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
                disabled={disabled}
            />
            <label htmlFor={props.id}>{label}</label>
        </div>
    );
}

export { Checkbox, CheckboxProps };
