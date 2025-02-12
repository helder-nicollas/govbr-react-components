import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

const SelectTriggerField = forwardRef<Ref, ComponentProps<'input'>>(
    (props, ref) => {
        return (
            <input
                type="text"
                ref={ref}
                {...props}
                placeholder={props.placeholder || 'Selecione um item'}
            />
        );
    },
);

SelectTriggerField.displayName = 'SelectTriggerField';
export { SelectTriggerField };
