import { tv } from 'tailwind-variants';

export const textareaVariants = tv({
    base: 'br-textarea max-w-[500px]',
    variants: {
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
