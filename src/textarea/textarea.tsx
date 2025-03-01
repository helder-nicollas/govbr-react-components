import { ComponentProps } from 'react';
import { TextareaField } from './textarea-field';
import { VariantProps } from 'tailwind-variants';
import { textareaVariants } from './variants';
import '@govbr-ds/core/dist/components/textarea/textarea.min.css';

type TextareaProps = ComponentProps<'div'> &
    VariantProps<typeof textareaVariants>;

function Textarea({
    className,
    variant,
    size,
    children,
    ...props
}: TextareaProps) {
    return (
        <div
            className={textareaVariants({ className, variant, size })}
            {...props}
        >
            {children}
        </div>
    );
}

Textarea.Field = TextareaField;

export { Textarea, TextareaProps };
