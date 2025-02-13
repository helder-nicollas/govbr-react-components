import { tv } from 'tailwind-variants';

export const itemVariants = tv({
    base: 'br-item',
    variants: {
        state: {
            selected: 'selected',
            active: 'active',
            normal: '',
        },
    },
    defaultVariants: {
        state: 'normal',
    },
});
