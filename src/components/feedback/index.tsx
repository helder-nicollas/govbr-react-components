import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import '@govbr-ds/core/dist/components/message/message.min.css';
import { inputMessageIconVariants, inputMessageVariants } from './variants';

export interface IFeedbackProps
    extends VariantProps<typeof inputMessageVariants>,
        ComponentProps<'span'>,
        VariantProps<typeof inputMessageIconVariants> {
    message?: string;
}

export function Feedback({
    type,
    className,
    message,
    icon,
    ...props
}: IFeedbackProps) {
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
