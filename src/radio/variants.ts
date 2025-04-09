import { tv } from 'tailwind-variants';

export const radioVariants = tv({
    base: 'br-radio',
    variants: {
        variant: {
            invalid: 'invalid',
            valid: 'valid',
            normal: '',
        },
    },
    defaultVariants: {
        variant: 'normal',
    },
});
