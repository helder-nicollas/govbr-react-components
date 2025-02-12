import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLTextAreaElement;

const TextareaField = forwardRef<Ref, ComponentProps<'textarea'>>(
    ({ value, ...props }, ref) => {
        return (
            <textarea ref={ref} {...props}>
                {value}
            </textarea>
        );
    },
);

TextareaField.displayName = 'TextareField';

export { TextareaField };
