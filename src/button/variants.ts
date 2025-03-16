import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'br-button',
    variants: {
        variant: {
            primary: 'primary',
            outline: 'secondary',
            transparent: '',
        },
        size: {
            large: 'large',
            medium: '',
            small: 'small',
        },
        circle: {
            true: 'circle',
        },
        loading: {
            true: 'loading',
        },
    },
    defaultVariants: {
        variant: 'transparent',
        size: 'medium',
    },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
