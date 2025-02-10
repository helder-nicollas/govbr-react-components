import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

const InputField = forwardRef<Ref, ComponentProps<'input'>>((props, ref) => {
    return <input type="text" ref={ref} {...props} />;
});

InputField.displayName = 'InputField';
export { InputField };
