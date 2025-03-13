import { createContext, useContext } from 'react';

interface IMenuContext {
    onOpenChange?(): void;
}

export const MenuContext = createContext({} as IMenuContext);

export const useMenu = () => {
    const context = useContext(MenuContext);
    return context;
};
