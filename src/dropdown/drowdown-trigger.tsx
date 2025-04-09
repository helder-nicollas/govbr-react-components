import { ComponentProps, forwardRef } from 'react';
import { useDropdown } from './dropdown';

type Ref = HTMLDivElement;

type DropdownTriggerProps = ComponentProps<'div'>;

const DropdownTrigger = forwardRef<Ref, DropdownTriggerProps>(
    ({ children, ...props }, ref) => {
        const { handleChangeOpen, open } = useDropdown();

        return (
            <div
                {...props}
                data-toggle="dropdown"
                ref={ref}
                onClick={() => handleChangeOpen(!open)}
            >
                {children}
            </div>
        );
    },
);

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger, type DropdownTriggerProps };
