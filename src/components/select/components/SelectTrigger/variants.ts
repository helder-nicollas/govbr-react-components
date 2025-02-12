import { tv } from 'tailwind-variants';

export const selectTriggerVariants = tv({
    base: 'br-input input-button max-w-[400px]',
    variants: {
        highlight: {
            true: 'input-highlight',
        },
        size: {
            large: 'large',
            medium: '',
            small: 'small',
        },
        variant: {
            info: 'info',
            warning: 'warning',
            danger: 'danger',
            success: 'success',
            normal: '',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});
