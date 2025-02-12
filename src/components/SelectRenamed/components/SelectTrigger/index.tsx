import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';
import { SelectTriggerField } from './SelectTriggerField';
import { SelectTriggerButton } from './SelectTriggerButton';

export const selecTriggerVariants = tv({
    base: 'br-input',
    variants: {
        highlight: {
            true: 'input-highlight',
        },
        size: {
            large: 'large',
            medium: '',
            small: 'small',
        },
        variant: {
            info: 'info',
            warning: 'warning',
            danger: 'danger',
            success: 'success',
            normal: '',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

export interface ISelectTriggerProps
    extends ComponentProps<'div'>,
        VariantProps<typeof selecTriggerVariants> {
    children: ReactNode;
}

export function SelectTrigger({
    children,
    className,
    highlight,
    size,
    variant,
    ...props
}: ISelectTriggerProps) {
    return (
        <div
            className={twMerge(
                'br-input max-w-[400px] input-button',
                selecTriggerVariants({
                    highlight,
                    size,
                    variant,
                    className,
                }),
            )}
            {...props}
        >
            {children}
        </div>
    );
}

SelectTrigger.Field = SelectTriggerField;
SelectTrigger.Button = SelectTriggerButton;
