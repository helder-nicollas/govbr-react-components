import '@govbr-ds/core/dist/components/checkbox/checkbox.min.css';
import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './variants';
import { CheckboxField } from './checkbox-field';

interface ICheckboxProps
    extends ComponentProps<'div'>,
        VariantProps<typeof checkboxVariants> {}

function Checkbox({ className, variant, children, ...props }: ICheckboxProps) {
    return (
        <div
            className={checkboxVariants({
                className,
                variant,
            })}
            {...props}
        >
            {children}
        </div>
    );
}

Checkbox.Field = CheckboxField;

export { Checkbox, ICheckboxProps };
