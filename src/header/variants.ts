import { tv } from 'tailwind-variants';

export const headerVariants = tv({
    base: 'br-header',
    variants: {
        size: {
            large: 'large',
            medium: 'medium',
            small: 'small',
        },
        compact: {
            true: 'compact',
        },
    },
    defaultVariants: {
        size: 'medium',
        compact: false,
    },
});
