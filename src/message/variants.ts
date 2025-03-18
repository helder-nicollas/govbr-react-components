import { tv } from 'tailwind-variants';

export const messageVariants = tv({
    slots: {
        base: 'br-message',
        icon: 'fa-lg fas',
    },
    variants: {
        variant: {
            danger: {
                base: 'danger',
                icon: 'fa-times-circle',
            },
            success: {
                base: 'success',
                icon: 'fa-check-circle',
            },
            info: {
                base: 'info',
                icon: 'fa-info-circle',
            },
            warning: {
                base: 'warning',
                icon: 'fa-exclamation-triangle',
            },
        },
    },
    defaultVariants: {
        variant: 'danger',
    },
});
