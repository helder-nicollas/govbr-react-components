import { ComponentProps } from 'react';
import { useModal } from './context/modal-context';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';

type ModalHeaderProps = ComponentProps<'div'> & {
    withCloseButton?: boolean;
};

function ModalHeader({
    className,
    children,
    withCloseButton,
    ...props
}: ModalHeaderProps) {
    const { handleClose } = useModal();
    return (
        <div className={twMerge('br-modal-header', className)} {...props}>
            {children}
            {withCloseButton && (
                <Button
                    className="close top-1"
                    circle
                    type="button"
                    onClick={handleClose}
                    aria-label="Fechar"
                >
                    <i
                        className="fas fa-times text-secondary-foreground"
                        aria-hidden="true"
                    />
                </Button>
            )}
        </div>
    );
}

export { ModalHeaderProps, ModalHeader };
