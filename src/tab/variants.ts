import { tv } from 'tailwind-variants';

export const tabVariants = tv({
    base: 'br-tab',
    variants: {
        size: {
            small: 'small',
            medium: '',
            large: 'large',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});
