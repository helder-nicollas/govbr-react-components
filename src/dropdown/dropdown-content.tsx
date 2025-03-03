import { ComponentProps } from 'react';
import { useDropdown } from './dropdown';
import { twMerge } from 'tailwind-merge';

type DropdownContentProps = ComponentProps<'div'>;

function DropdownContent({
    className,
    children,
    ...props
}: DropdownContentProps) {
    const { open } = useDropdown();

    if (!open) return null;

    return (
        <div {...props} className={twMerge('target', className)}>
            {children}
        </div>
    );
}

export { DropdownContent, type DropdownContentProps };
