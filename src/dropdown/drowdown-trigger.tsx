import { ReactNode } from 'react';
import { useDropdown } from './dropdown';

export function DropdownTrigger({ children }: { children: ReactNode }) {
    const { handleChangeOpen, open } = useDropdown();

    return (
        <div onClick={() => handleChangeOpen(!open)} data-toggle="dropdown">
            {children}
        </div>
    );
}
