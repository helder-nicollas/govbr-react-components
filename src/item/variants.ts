import { tv, VariantProps } from 'tailwind-variants';

export const itemVariants = tv({
    base: 'br-item',
    variants: {
        selected: {
            true: 'selected',
        },
        active: {
            true: 'active',
        },
    },
});

export type ItemVariants = VariantProps<typeof itemVariants>;
