import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { modalVariants } from './variants';

type ModalContentProps = VariantProps<typeof modalVariants> &
    ComponentProps<'div'>;

function ModalContent({ children, width, className }: ModalContentProps) {
    return (
        <div
            className={modalVariants({
                className,
                width,
            })}
        >
            {children}
        </div>
    );
}

export { ModalContentProps, ModalContent };
