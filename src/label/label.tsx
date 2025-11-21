import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLLabelElement;
type LabelProps = ComponentProps<'div'>;

const Label = forwardRef<Ref, LabelProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <label {...props} className={twMerge('label', className)} ref={ref}>
                {children}
            </label>
        );
    },
);

Label.displayName = 'Label';

export { Label, LabelProps };
