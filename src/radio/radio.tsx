import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { radioVariants } from './variants';
import { twMerge } from 'tailwind-merge';

type RadioProps = ComponentPropsWithoutRef<'div'> &
    VariantProps<typeof radioVariants> & {
        disabled?: boolean;
    };

type Ref = HTMLDivElement;

const Radio = forwardRef<Ref, RadioProps>(
    ({ className, children, variant, disabled, ...props }, ref) => {
        const radioClass = twMerge(className, disabled && 'disabled');

        return (
            <div
                {...props}
                className={radioVariants({ className: radioClass, variant })}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

Radio.displayName = 'Radio';

export { Radio, type RadioProps };
