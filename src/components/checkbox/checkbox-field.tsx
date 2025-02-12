import { ComponentProps } from 'react';

type CheckboxFieldProps = ComponentProps<'input'>;

function CheckboxField({ ...props }: ComponentProps<'input'>) {
    return (
        <>
            <input {...props} id={props.id} type="checkbox" />
            <label htmlFor={props.id}>hidden label</label>
        </>
    );
}

export { CheckboxField, CheckboxFieldProps };
