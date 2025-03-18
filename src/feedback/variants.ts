import { tv } from 'tailwind-variants';

const feedbackVariants = tv({
    slots: {
        base: 'feedback',
        icon: 'fas',
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

export { feedbackVariants };
