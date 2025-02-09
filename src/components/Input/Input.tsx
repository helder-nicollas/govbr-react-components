'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';
import '@govbr-ds/core/dist/components/input/input.min.css';

const inputVariants = tv({
    base: 'br-input',
    variants: {
        highlight: {
            true: 'input-highlight',
        },
        withButton: {
            true: 'input-button',
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
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

interface IInputProps
    extends ComponentProps<'div'>,
        VariantProps<typeof inputVariants> {
    children: ReactNode;
}

export function Input({
    children,
    className,
    highlight,
    withButton,
    size,
    variant,
    ...props
}: IInputProps) {
    return (
        <div
            className={twMerge(
                'br-input max-w-[400px]',
                inputVariants({
                    highlight,
                    size,
                    withButton,
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
