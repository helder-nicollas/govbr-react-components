import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { inputMessageIconVariants, inputMessageVariants } from './variants';
import '@govbr-ds/core/dist/components/message/message.min.css';

type FeedbackProps = VariantProps<typeof inputMessageVariants> &
    ComponentProps<'span'> &
    VariantProps<typeof inputMessageIconVariants> & {
        message?: string;
    };

function Feedback({
    className,
    message,
    iconVariant,
    variant,
    ...props
}: FeedbackProps) {
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

export { Feedback, FeedbackProps };
