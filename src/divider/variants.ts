import { tv } from 'tailwind-variants';

export const dividerVariants = tv({
    base: 'br-divider',
    variants: {
        size: {
            small: 'sm',
            medium: 'md',
            large: 'lg',
        },
        vertical: {
            true: 'vertical',
        },
        dashed: {
            true: 'dashed',
        },
    },
    defaultVariants: { size: 'small' },
});
