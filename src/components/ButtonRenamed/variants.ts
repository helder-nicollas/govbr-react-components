import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'br-button',
    variants: {
        variant: {
            primary: 'primary',
            outline: 'secondary',
            transparent: '',
        },
        loading: {
            true: 'loading',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
