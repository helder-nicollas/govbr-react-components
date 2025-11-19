import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type ModalTitleProps = ComponentProps<'div'>;

const ModalTitle = forwardRef<Ref, ModalTitleProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('modal-title', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

ModalTitle.displayName = 'ModalTitle';

export { ModalTitle, type ModalTitleProps };
