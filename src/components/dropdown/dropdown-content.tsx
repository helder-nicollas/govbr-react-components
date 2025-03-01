import { ComponentProps } from 'react';
import { useDropdown } from '.';
import { twMerge } from 'tailwind-merge';

type DropdownContentProps = ComponentProps<'div'>;

export function DropdownContent({
    className,
    children,
    ...props
}: DropdownContentProps) {
    const { open } = useDropdown();

    if (!open) return null;

    return (
        <div {...props} className={twMerge('target', className)} id="target">
            {children}
        </div>
    );
}
