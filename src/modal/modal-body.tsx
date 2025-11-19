import { twMerge } from 'tailwind-merge';
import { ComponentProps, forwardRef } from 'react';

type ModalBodyProps = ComponentProps<'div'>;
type Ref = HTMLDivElement;

const ModalBody = forwardRef<Ref, ModalBodyProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('br-modal-body', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

ModalBody.displayName = 'ModalBody';

export { ModalBody, type ModalBodyProps };
