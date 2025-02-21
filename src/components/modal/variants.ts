import { tv } from 'tailwind-variants';

export const modalVariants = tv({
    base: 'br-modal w-full',
    variants: {
        width: {
            xsmall: 'xsmall',
            small: 'small',
            medium: 'medium',
            large: 'large',
            auto: 'auto',
        },
    },
    defaultVariants: {
        width: 'medium',
    },
});
