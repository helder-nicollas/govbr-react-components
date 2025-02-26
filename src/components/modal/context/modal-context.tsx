import { createContext, useContext } from 'react';

interface ModalContext {
    handleClose?(): void;
}
export const ModalContext = createContext({} as ModalContext);

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}
