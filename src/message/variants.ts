import { tv } from 'tailwind-variants';

export const messageVariants = tv({
    base: 'br-message min-w-80',
    variants: {
        type: {
            danger: 'danger',
            success: 'success',
            warning: 'warning',
            info: 'info',
        },
    },
    defaultVariants: {
        type: 'success',
    },
});

export const iconVariants = tv({
    base: 'fa-lg fas',
    variants: {
        icon: {
            success: 'fa-check-circle',
            danger: 'fa-times-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
        },
    },
    defaultVariants: {
        icon: 'success',
    },
});
