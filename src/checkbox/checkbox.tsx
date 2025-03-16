import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './variants';
import { CheckboxField } from './checkbox-field';

type CheckboxProps = VariantProps<typeof checkboxVariants> & {
    className?: string;
    children: ReactNode;
};

function Checkbox({
    variant,
    children,
    withoutLabel,
    className,
}: CheckboxProps) {
    return (
        <div
            className={checkboxVariants({
                className,
                withoutLabel,
                variant,
            })}
        >
            {children}
        </div>
    );
}

Checkbox.Field = CheckboxField;

export { Checkbox, CheckboxProps };
