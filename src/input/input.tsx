import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { InputIcon } from './input-icon';
import { InputButton } from './input-button';
import { InputField } from './Input-field';
import { InputGroup } from './input-group';
import { inputVariants } from './variants';

type InputProps = ComponentProps<'div'> & VariantProps<typeof inputVariants>;

function Input({
    children,
    className,
    highlight,
    withButton,
    size,
    variant,
    ...props
}: InputProps) {
    return (
        <div
            className={inputVariants({
                highlight,
                size,
                withButton,
                variant,
                className,
            })}
            {...props}
        >
            {children}
        </div>
    );
}

Input.Icon = InputIcon;
Input.Button = InputButton;
Input.Field = InputField;
Input.Group = InputGroup;
Input.Icon = InputIcon;

export { Input, InputProps };
