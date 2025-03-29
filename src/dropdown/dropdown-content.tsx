import { ComponentProps, forwardRef } from 'react';
import { useDropdown } from './dropdown';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type DropdownContentProps = ComponentProps<'div'>;

const DropdownContent = forwardRef<Ref, DropdownContentProps>(
    ({ className, children, ...props }, ref) => {
        const { open } = useDropdown();

        if (!open) return null;

        return (
            <div {...props} className={twMerge('target', className)} ref={ref}>
                {children}
            </div>
        );
    },
);

DropdownContent.displayName = 'DropdownContent';

export { DropdownContent, type DropdownContentProps };
