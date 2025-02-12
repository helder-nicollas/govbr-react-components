import { tv } from 'tailwind-variants';

export const inputVariants = tv({
    base: 'br-input max-w-[400px]',
    variants: {
        highlight: {
            true: 'input-highlight',
        },
        withButton: {
            true: 'input-button',
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
        variant: 'normal',
    },
});
