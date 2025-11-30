import { createContext, useContext } from 'react';

interface ModalContext {
    handleClose?(): void;
}

export const ModalContext = createContext({} as ModalContext);

export function useModal() {
    const context = useContext(ModalContext);
    if (!context)
        throw new Error(
            'O hook useModal deve ser utilizado em um componente filho de Modal.',
        );
    return context;
}
