/* eslint-disable no-unused-vars */
import {
    ComponentProps,
    createContext,
    forwardRef,
    useCallback,
    useContext,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface IDropdownContext {
    open: boolean;
    handleChangeOpen(value: boolean): void;
}

const DropdownContext = createContext<IDropdownContext>({} as IDropdownContext);

const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (!context)
        throw new Error(
            'O hook useDropdown deve ser utilizado em um componente filho de Dropdown.',
        );
    return context;
};

type Ref = HTMLDivElement;

type DropdownProps = ComponentProps<'div'>;

const Dropdown = forwardRef<Ref, DropdownProps>(
    ({ className, children, ...props }, ref) => {
        const [open, setOpen] = useState(false);

        const handleChangeOpen = useCallback(
            (value: boolean) => {
                setOpen(value);
            },
            [open],
        );

        return (
            <DropdownContext.Provider value={{ open, handleChangeOpen }}>
                <div
                    {...props}
                    className={twMerge('dropdown', className)}
                    ref={ref}
                >
                    {children}
                </div>
            </DropdownContext.Provider>
        );
    },
);

Dropdown.displayName = 'Dropdown';

export { Dropdown, useDropdown, type DropdownProps };
