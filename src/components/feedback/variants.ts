import { tv } from 'tailwind-variants';

const inputMessageVariants = tv({
    base: 'feedback',
    variants: {
        type: {
            success: 'success',
            danger: 'danger',
            info: 'info',
            warning: 'warning',
            disabled: 'warning',
        },
    },
    defaultVariants: {
        icon: 'success',
        type: 'success',
    },
});

const inputMessageIconVariants = tv({
    variants: {
        icon: {
            success: 'fas fa-check-circle',
            danger: 'fas fa-times-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
            disabled: 'fas fa-exclamation-triangle',
        },
    },
    defaultVariants: {
        icon: 'success',
    },
});

export { inputMessageVariants, inputMessageIconVariants };
