import { tv } from 'tailwind-variants';

const inputMessageVariants = tv({
    base: 'feedback',
    variants: {
        variant: {
            success: 'success',
            danger: 'danger',
            info: 'info',
            warning: 'warning',
        },
    },
    defaultVariants: {
        variant: 'success',
    },
});

const inputMessageIconVariants = tv({
    variants: {
        iconVariant: {
            success: 'fas fa-check-circle',
            danger: 'fas fa-times-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
        },
    },
    defaultVariants: {
        iconVariant: 'success',
    },
});

export { inputMessageVariants, inputMessageIconVariants };
