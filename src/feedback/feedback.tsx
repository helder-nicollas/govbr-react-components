import { ComponentProps, forwardRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { feedbackVariants } from './variants';

type Ref = HTMLSpanElement;

type FeedbackProps = VariantProps<typeof feedbackVariants> &
    Omit<ComponentProps<'span'>, 'children'> & {
        message?: string;
    };

const Feedback = forwardRef<Ref, FeedbackProps>(
    ({ className, message, variant, ...props }: FeedbackProps) => {
        if (!message) return null;

        const { base, icon } = feedbackVariants({ className, variant });

        return (
            <span {...props} className={base()} role="alert">
                <i className={icon()} aria-hidden="true" />
                {message}
            </span>
        );
    },
);

Feedback.displayName = 'Feedback';

export { Feedback, FeedbackProps };
