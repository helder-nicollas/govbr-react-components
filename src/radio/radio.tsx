import { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { radioVariants } from './variants';
import { RadioField } from './radio-field';
import { twMerge } from 'tailwind-merge';

type RadioProps = ComponentPropsWithoutRef<'div'> &
    VariantProps<typeof radioVariants> & {
        disabled?: boolean;
    };

function Radio({
    className,
    children,
    variant,
    disabled,
    ...props
}: RadioProps) {
    const radioClass = twMerge(className, disabled && 'disabled');

    return (
        <div
            {...props}
            className={radioVariants({ className: radioClass, variant })}
        >
            {children}
        </div>
    );
}

Radio.Field = RadioField;

export { Radio, type RadioProps };
