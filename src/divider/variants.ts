import { tv } from 'tailwind-variants';

export const dividerVariants = tv({
    base: 'br-divider h-auto m-0',
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
