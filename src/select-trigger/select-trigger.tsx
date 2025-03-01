import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { selectTriggerVariants } from './variants';
import { Input } from '../input';
import { SelectTriggerField } from './select-trigger-field';

type SelectTriggerProps = ComponentProps<'div'> &
    VariantProps<typeof selectTriggerVariants>;

function SelectTrigger({
    children,
    className,
    highlight,
    size,
    variant,
    ...props
}: SelectTriggerProps) {
    return (
        <Input
            {...props}
            className={selectTriggerVariants({
                highlight,
                size,
                variant,
                className,
            })}
            withButton
        >
            {children}
            <Input.Button
                aria-label="Exibir lista"
                data-trigger="data-trigger"
                tabIndex={-1}
            >
                <i className="fas fa-angle-down" aria-hidden="true" />
            </Input.Button>
        </Input>
    );
}

SelectTrigger.Field = SelectTriggerField;

export { SelectTrigger, SelectTriggerProps };
