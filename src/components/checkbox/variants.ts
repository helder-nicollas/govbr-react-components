import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
    base: 'br-checkbox hidden-label',
    variants: {
        variant: {
            invalid: 'invalid',
            valid: 'valid',
            disabled: 'disabled',
            normal: '',
        },
    },
    defaultVariants: {
        variant: 'normal',
    },
});
