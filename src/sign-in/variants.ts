import { tv, VariantProps } from 'tailwind-variants';

export const signInVariants = tv({
    base: 'br-sign-in',
    variants: {
        variant: {
            primary: 'primary',
            secondary: '',
        },
        size: {
            large: 'large',
            medium: 'medium',
            small: 'small',
        },
        circle: {
            true: 'circle',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

export type SignInVariants = VariantProps<typeof signInVariants>;
