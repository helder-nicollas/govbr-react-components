import { tv, VariantProps } from 'tailwind-variants';

export const magicButtonVariants = tv({
    base: 'br-magic-button',
    slots: {
        base: 'br-magic-button',
        button: 'br-button',
    },
    variants: {
        size: {
            sm: { base: 'small' },
            md: { base: 'medium' },
            lg: { base: 'large' },
        },
        circle: {
            true: {
                button: 'circle',
            },
        },
    },
    defaultVariants: {
        circle: false,
        size: 'md',
    },
});

export type MagicButtonVariants = VariantProps<typeof magicButtonVariants>;
