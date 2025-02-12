import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { inputMessageIconVariants, inputMessageVariants } from './variants';
import '@govbr-ds/core/dist/components/message/message.min.css';

export interface IFeedbackProps
    extends VariantProps<typeof inputMessageVariants>,
        ComponentProps<'span'>,
        VariantProps<typeof inputMessageIconVariants> {
    message?: string;
}

export function Feedback({
    className,
    message,
    iconVariant,
    variant,
    ...props
}: IFeedbackProps) {
    if (!message) return null;
    return (
        <span
            {...props}
            className={inputMessageVariants({ className, variant })}
            role="alert"
        >
            <i
                className={inputMessageIconVariants({ iconVariant })}
                aria-hidden="true"
            />
            {message}
        </span>
    );
}
