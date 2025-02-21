import { MouseEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
import { ModalContext } from './context/modal-context';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/modal/modal.min.css';
import '@govbr-ds/core/dist/components/scrim/scrim.min.css';
import { ModalHeader } from './modal-header';
import { ModalFooter } from './modal-footer';
import { ModalTitle } from './modal-title';
import { ModalContent } from './modal-content';
import { ModalBody } from './modal-body';

type ModalProps = {
    children: ReactNode;
    open?: boolean;
    onOpenChange?(): void;
};

function Modal({ children, open, onOpenChange }: ModalProps) {
    const modalId = useRef(
        `modal-${Math.floor(Math.random() * 50)}-${Math.floor(Math.random() * 50)}`,
    );
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleClose = useCallback(() => {
        return onOpenChange?.();
    }, [onOpenChange]);

    const handleCloseWithEscape = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    const handleCloseModalWithClick = (
        event: MouseEvent<HTMLDivElement> & { target: { id: string } },
    ) => {
        if (event.target.id == `modal-${modalId.current}`) handleClose();
    };

    useEffect(() => {
        if (open)
            document.addEventListener('keydown', handleCloseWithEscape, {
                once: true,
            });
        return () =>
            document.removeEventListener('keydown', handleCloseWithEscape);
    }, [open]);

    if (!open) return null;

    return (
        <>
            <div
                className={twMerge('br-scrim-util foco', open && 'active')}
                ref={modalRef}
                onClick={handleCloseModalWithClick}
                id={`modal-${modalId.current}`}
            >
                <ModalContext.Provider value={{ handleClose }}>
                    {children}
                </ModalContext.Provider>
            </div>
        </>
    );
}

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Body = ModalBody;

export { Modal, ModalProps };
