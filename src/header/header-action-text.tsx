import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLSpanElement;

const HeaderActionText = forwardRef<Ref, ComponentProps<'span'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <span {...props} className={twMerge('text', className)} ref={ref}>
                {children}
            </span>
        );
    },
);

HeaderActionText.displayName = 'HeaderActionText';
export { HeaderActionText };
