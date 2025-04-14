import { createContext, useContext } from 'react';

interface IMenuContext {
    onOpenChange?(): void;
}

export const MenuContext = createContext({} as IMenuContext);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context)
        throw new Error(
            'O hook useMenu deve ser utilizado em um componente filho de Menu.',
        );
    return context;
};
