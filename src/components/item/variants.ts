import { tv } from 'tailwind-variants';

export const itemVariants = tv({
    base: 'br-item',
    variants: {
        state: {
            selected: 'selected',
            active: 'active',
            disabled: 'disabled',
            normal: '',
        },
    },
    defaultVariants: {
        state: 'normal',
    },
});
