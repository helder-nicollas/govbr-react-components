import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { selectTriggerVariants } from './variants';
import { Input, InputButton } from '../input';

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
            <InputButton
                aria-label="Exibir lista"
                data-trigger="data-trigger"
                tabIndex={-1}
            >
                <i className="fas fa-angle-down" aria-hidden="true" />
            </InputButton>
        </Input>
    );
}

export { SelectTrigger, SelectTriggerProps };
