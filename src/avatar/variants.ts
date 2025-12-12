import { tv, VariantProps } from 'tailwind-variants';

export const avatarVariants = tv({
    base: 'br-avatar',
    variants: {
        size: {
            sm: '',
            md: 'medium',
            lg: 'large',
        },
    },
    defaultVariants: {
        size: 'sm',
    },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
