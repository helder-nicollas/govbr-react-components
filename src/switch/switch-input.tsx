import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;
type SwitchInputProps = ComponentProps<'input'>;

const SwitchInput = forwardRef<Ref, SwitchInputProps>((props, ref) => (
    <input {...props} type="checkbox" role="switch" ref={ref} />
));

SwitchInput.displayName = 'SwitchInput';

export { SwitchInput, type SwitchInputProps };
