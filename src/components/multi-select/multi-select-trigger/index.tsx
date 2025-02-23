import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { selectTriggerVariants } from './variants';
import { MultiSelectTriggerField } from './multi-select-trigger-field';
import { MultiSelectTriggerButton } from './multi-select-trigger-button';

type MultiSelectTriggerProps = ComponentProps<'div'> &
    VariantProps<typeof selectTriggerVariants>;

function MultiSelectTrigger({
    children,
    className,
    highlight,
    size,
    variant,
    ...props
}: MultiSelectTriggerProps) {
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

MultiSelectTrigger.Field = MultiSelectTriggerField;
MultiSelectTrigger.Button = MultiSelectTriggerButton;

export { MultiSelectTrigger, MultiSelectTriggerProps };
