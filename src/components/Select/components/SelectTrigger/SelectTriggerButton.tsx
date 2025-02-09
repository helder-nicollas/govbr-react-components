'use client';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function SelectTriggerButton({
    className,
    ...props
}: ComponentProps<'button'>) {
    return (
        <button
            className={twMerge('br-button top-1 relative', className)}
            type="button"
            aria-label="Exibir lista"
            data-trigger="data-trigger"
            tabIndex={-1}
            {...props}
        >
            <i className="fas fa-angle-down" aria-hidden="true" />
        </button>
    );
}
