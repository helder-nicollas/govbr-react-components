import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import '@govbr-ds/core/dist/components/input/input.min.css';
import { InputIcon } from './InputIcon';
import { InputButton } from './InputButton';
import { InputGroup } from './InputGroup';
export declare const inputVariants: import("tailwind-variants").TVReturnType<{
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}, undefined, "br-input", import("tailwind-variants/dist/config").TVConfig<{
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}, {
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}>, {
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}, undefined, "br-input", import("tailwind-variants/dist/config").TVConfig<{
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}, {
    highlight: {
        true: string;
    };
    withButton: {
        true: string;
    };
    size: {
        large: string;
        medium: string;
        small: string;
    };
    variant: {
        info: string;
        warning: string;
        danger: string;
        success: string;
        normal: string;
    };
}>, unknown, unknown, undefined>>;
export interface IInputProps extends ComponentProps<'div'>, VariantProps<typeof inputVariants> {
    children: ReactNode;
}
declare function Input({ children, className, highlight, withButton, size, variant, ...props }: IInputProps): import("react/jsx-runtime").JSX.Element;
declare namespace Input {
    var Icon: typeof InputIcon;
    var Button: typeof InputButton;
    var Field: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    var Group: typeof InputGroup;
}
export { Input };
