'use client';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function SelectList({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div className={twMerge('br-list', className)} tabIndex={0} {...props}>
            {children}
        </div>
    );
}
