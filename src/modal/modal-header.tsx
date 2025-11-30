import { ComponentProps, forwardRef } from 'react';
import { useModal } from './context/modal-context';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';

type ModalHeaderProps = ComponentProps<'div'> & {
    withCloseButton?: boolean;
};
type Ref = HTMLDivElement;

const ModalHeader = forwardRef<Ref, ModalHeaderProps>(
    ({ className, children, withCloseButton, ...props }, ref) => {
        const { handleClose } = useModal();
        return (
            <div
                {...props}
                className={twMerge('br-modal-header', className)}
                ref={ref}
            >
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
    },
);

ModalHeader.displayName = 'ModalHeader';

export { ModalHeader, type ModalHeaderProps };
