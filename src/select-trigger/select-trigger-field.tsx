import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

const SelectTriggerField = forwardRef<Ref, ComponentProps<'input'>>(
    (props, ref) => {
        return (
            <input
                {...props}
                type="text"
                ref={ref}
                placeholder={props.placeholder}
            />
        );
    },
);

SelectTriggerField.displayName = 'SelectTriggerField';
export { SelectTriggerField };
