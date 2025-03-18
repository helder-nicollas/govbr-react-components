import { tv } from 'tailwind-variants';

const feedbackVariants = tv({
    slots: {
        base: 'feedback',
        icon: '',
    },
    variants: {
        variant: {
            danger: {
                base: 'danger',
                icon: 'fas fa-times-circle',
            },
            success: {
                base: 'success',
                icon: 'fas fa-check-circle',
            },
            info: {
                base: 'info',
                icon: 'fas fa-info-circle',
            },
            warning: {
                base: 'warning',
                icon: 'fas fa-exclamation-triangle',
            },
        },
    },
    defaultVariants: {
        variant: 'danger',
    },
});

export { feedbackVariants };
