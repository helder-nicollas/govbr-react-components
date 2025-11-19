import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalFooterProps = ComponentProps<'div'>;
type Ref = HTMLDivElement;

const ModalFooter = forwardRef<Ref, ModalFooterProps>(
    ({ className, children, ...props }) => {
        return (
            <div
                className={twMerge(
                    'br-modal-footer flex flex-col justify-end gap-2 lg:flex-row',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

ModalFooter.displayName = 'ModalFooter';

export { ModalFooter, type ModalFooterProps };
