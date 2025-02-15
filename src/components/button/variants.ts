import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'br-button',
    variants: {
        variant: {
            primary: 'primary',
            outline: 'secondary',
            transparent: '',
        },
        circle: {
            true: 'circle',
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
