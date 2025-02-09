import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const selecTriggerVariants = tv({
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

interface ISelectTriggerProps
    extends ComponentProps<'div'>,
        VariantProps<typeof selecTriggerVariants> {
    children: ReactNode;
}

export function SelectTriggerRoot({
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
