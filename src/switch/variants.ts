import { tv, VariantProps } from 'tailwind-variants';

export const switchVariants = tv({
    base: 'br-switch',
    variants: {
        icon: {
            true: 'icon',
        },
        size: {
            sm: 'small',
            md: 'medium',
            lg: 'large',
        },
        align: {
            right: 'right',
            top: 'top',
            left: '',
        },
        disabled: {
            true: 'disabled',
        },
    },
    defaultVariants: {
        align: 'left',
        size: 'md',
        icon: false,
    },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
