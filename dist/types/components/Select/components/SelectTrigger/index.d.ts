import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { SelectTriggerButton } from './SelectTriggerButton';
export declare const selecTriggerVariants: import("tailwind-variants").TVReturnType<{
    highlight: {
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
export interface ISelectTriggerProps extends ComponentProps<'div'>, VariantProps<typeof selecTriggerVariants> {
    children: ReactNode;
}
export declare function SelectTrigger({ children, className, highlight, size, variant, ...props }: ISelectTriggerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SelectTrigger {
    var Field: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    var Button: typeof SelectTriggerButton;
}
