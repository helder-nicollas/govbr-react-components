'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';

const inputContentVariants = tv({
    base: 'br-input',
    variants: {
        border: {
            highlight: 'input-highlight',
            black: '',
        },
        withButton: {
            true: 'input-button',
            false: '',
        },
        density: {
            large: 'large',
            medium: '',
            small: 'small',
        },
    },
    defaultVariants: {
        border: 'black',
        density: 'medium',
    },
});

interface InputContentProps
    extends ComponentProps<'div'>,
        VariantProps<typeof inputContentVariants> {
    children: ReactNode;
}

export default function InputRoot({
    children,
    className,
    border,
    withButton,
    density,
    ...props
}: InputContentProps) {
    return (
        <div
            className={twMerge(
                'br-input max-w-[400px]',
                inputContentVariants({
                    border,
                    density,
                    withButton,
                    className,
                }),
            )}
            {...props}
        >
            {children}
        </div>
    );
}
