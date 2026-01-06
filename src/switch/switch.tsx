import { ComponentProps, forwardRef } from 'react';
import { SwitchVariants, switchVariants } from './variants';
import { Label } from '../label';

type Ref = HTMLDivElement;
type SwitchProps = ComponentProps<'div'> &
    SwitchVariants & {
        id: string;
        label: string;
        onSwitch?(): void;
        checked?: boolean;
    };

const Switch = forwardRef<Ref, SwitchProps>(
    (
        {
            className,
            align,
            size,
            icon,
            id,
            label,
            checked,
            onSwitch,
            ...props
        },
        ref,
    ) => (
        <div
            {...props}
            className={switchVariants({ className, align, icon, size })}
            role="presentation"
            ref={ref}
        >
            <input
                {...props}
                id={id}
                checked={checked}
                type="checkbox"
                role="switch"
                onChange={onSwitch}
            />
            <Label htmlFor={id}>{label}</Label>
        </div>
    ),
);

Switch.displayName = 'Switch';

export { Switch, type SwitchProps };
