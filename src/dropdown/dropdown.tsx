/* eslint-disable no-unused-vars */
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from 'react';
import { DropdownTrigger } from './drowdown-trigger';
import { DropdownContent } from './dropdown-content';

interface IDropdownContext {
    open: boolean;
    handleChangeOpen(value: boolean): void;
}

const DropdownContext = createContext<IDropdownContext>({} as IDropdownContext);

const useDropdown = () => {
    const context = useContext(DropdownContext);
    return context;
};

type DropdownProps = {
    children: ReactNode;
};

function Dropdown({ children }: DropdownProps) {
    const [open, setOpen] = useState(false);

    const handleChangeOpen = useCallback(
        (value: boolean) => {
            setOpen(value);
        },
        [open],
    );

    return (
        <DropdownContext.Provider value={{ open, handleChangeOpen }}>
            <div className="dropdown">{children}</div>
        </DropdownContext.Provider>
    );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;

export { Dropdown, useDropdown, type DropdownProps };
