import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

export type CheckboxFieldProps = ComponentProps<'input'> & {
    id: string;
    withoutLabel?: boolean;
};

const CheckboxField = forwardRef<Ref, CheckboxFieldProps>(
    ({ withoutLabel, id, ...props }, ref) => {
        return (
            <>
                <input
                    {...props}
                    id={id}
                    type="checkbox"
                    role="checkbox"
                    ref={ref}
                />
                {withoutLabel && <label htmlFor={id} />}
            </>
        );
    },
);

CheckboxField.displayName = 'CheckboxField';
export { CheckboxField };
