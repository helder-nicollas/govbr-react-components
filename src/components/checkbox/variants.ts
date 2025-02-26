import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
    base: 'br-checkbox',
    variants: {
        variant: {
            invalid: 'invalid',
            valid: 'valid',
            normal: '',
        },
        withoutLabel: {
            true: 'hidden-label',
        },
    },
    defaultVariants: {
        variant: 'normal',
    },
});
