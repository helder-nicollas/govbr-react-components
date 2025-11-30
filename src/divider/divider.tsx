import { ComponentProps, forwardRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { dividerVariants } from './variants';

type DividerProps = ComponentProps<'hr'> & VariantProps<typeof dividerVariants>;
type Ref = HTMLHRElement;

const Divider = forwardRef<Ref, DividerProps>(
    ({ className, vertical, dashed, size, ...props }, ref) => (
        <hr
            {...props}
            className={dividerVariants({
                className,
                dashed,
                size,
                vertical,
            })}
            role="separator"
            ref={ref}
        />
    ),
);

Divider.displayName = 'Divider';

export { Divider, type DividerProps };
