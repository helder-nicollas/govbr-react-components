import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

export type CheckboxFieldProps = ComponentProps<'input'> & {
    id: string;
};

const CheckboxField = forwardRef<Ref, CheckboxFieldProps>((props, ref) => {
    return <input {...props} type="checkbox" role="checkbox" ref={ref} />;
});

CheckboxField.displayName = 'CheckboxField';
export { CheckboxField };
