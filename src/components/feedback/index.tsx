import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import '@govbr-ds/core/dist/components/message/message.min.css';

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

interface IProps
    extends VariantProps<typeof inputMessageVariants>,
        ComponentProps<'span'>,
        VariantProps<typeof inputMessageIconVariants> {
    message?: string;
}

export function Feedback({ type, className, message, icon, ...props }: IProps) {
    if (!message) return null;
    return (
        <span
            {...props}
            className={inputMessageVariants({ className, type })}
            role="alert"
        >
            <i
                className={inputMessageIconVariants({ icon })}
                aria-hidden="true"
            />
            {message}
        </span>
    );
}
