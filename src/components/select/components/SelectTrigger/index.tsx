import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { SelectTriggerField } from './select-trigger-field';
import { SelectTriggerButton } from './select-trigger-button';
import { selectTriggerVariants } from './variants';

interface ISelectTriggerProps
    extends ComponentProps<'div'>,
        VariantProps<typeof selectTriggerVariants> {}

function SelectTrigger({
    children,
    className,
    highlight,
    size,
    variant,
    ...props
}: ISelectTriggerProps) {
    return (
        <div
            className={selectTriggerVariants({
                highlight,
                size,
                variant,
                className,
            })}
            {...props}
        >
            {children}
        </div>
    );
}

SelectTrigger.Field = SelectTriggerField;
SelectTrigger.Button = SelectTriggerButton;

export { SelectTrigger, ISelectTriggerProps };
