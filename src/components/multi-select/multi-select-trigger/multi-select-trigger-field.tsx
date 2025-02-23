import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;

const MultiSelectTriggerField = forwardRef<Ref, ComponentProps<'input'>>(
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

MultiSelectTriggerField.displayName = 'MultiSelectTriggerField';
export { MultiSelectTriggerField };
