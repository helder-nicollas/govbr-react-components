import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './variants';

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

export { Checkbox, CheckboxProps };
