import { ComponentProps } from 'react';

export function CheckboxField({ ...props }: ComponentProps<'input'>) {
    return <input {...props} type="checkbox" />;
}
