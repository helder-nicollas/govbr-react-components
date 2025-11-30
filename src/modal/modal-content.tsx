import { ComponentProps, forwardRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { modalVariants } from './variants';

type Ref = HTMLDivElement;

type ModalContentProps = VariantProps<typeof modalVariants> &
    ComponentProps<'div'>;

const ModalContent = forwardRef<Ref, ModalContentProps>(
    ({ className, width, children, ...props }) => {
        return (
            <div
                {...props}
                className={modalVariants({
                    className,
                    width,
                })}
                role="dialog"
            >
                {children}
            </div>
        );
    },
);

ModalContent.displayName = 'ModalContent';

export { ModalContent, type ModalContentProps };
