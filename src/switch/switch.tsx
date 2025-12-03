import { ComponentProps, forwardRef } from 'react';
import { SwitchVariants, switchVariants } from './variants';

type Ref = HTMLDivElement;
type SwitchProps = ComponentProps<'div'> & SwitchVariants;

const Switch = forwardRef<Ref, SwitchProps>(
    ({ className, children, align, size, icon, ...props }, ref) => (
        <div
            {...props}
            className={switchVariants({ className, align, icon, size })}
            role="presentation"
            ref={ref}
        >
            {children}
        </div>
    ),
);

Switch.displayName = 'Switch';

export { Switch, type SwitchProps };
