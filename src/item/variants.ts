import { tv } from 'tailwind-variants';

export const itemVariants = tv({
    base: 'br-item',
    variants: {
        selected: {
            true: 'selected',
        },
        active: {
            true: 'active',
        },
    },
});
