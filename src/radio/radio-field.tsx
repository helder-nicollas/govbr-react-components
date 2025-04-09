import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

type RadioFieldProps = ComponentProps<'input'> & {
    id: string;
};

const RadioField = forwardRef<Ref, RadioFieldProps>(({ id, ...props }, ref) => {
    return <input {...props} id={id} type="radio" role="radio" ref={ref} />;
});

RadioField.displayName = 'RadioField';
export { RadioField, type RadioFieldProps };
