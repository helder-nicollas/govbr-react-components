import * as react from 'react';
import react__default, { ComponentProps, ReactNode } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: tailwind_variants.TVReturnType<{
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}, undefined, "br-button", tailwind_variants_dist_config.TVConfig<{
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}, {
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}>, {
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}, undefined, "br-button", tailwind_variants_dist_config.TVConfig<{
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}, {
    variant: {
        primary: string;
        outline: string;
        transparent: string;
    };
    loading: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariants & ComponentProps<'button'>;
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare function Label({ children, ...props }: ComponentProps<'label'>): react_jsx_runtime.JSX.Element;

declare function InputIcon({ className, children, ...props }: ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function InputButton({ children, className, ...props }: ComponentProps<'button'>): react_jsx_runtime.JSX.Element;

declare function InputGroup({ className, children, ...props }: ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare const inputVariants: tailwind_variants.TVReturnType<{
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
}, undefined, "br-input", tailwind_variants_dist_config.TVConfig<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
}, undefined, "br-input", tailwind_variants_dist_config.TVConfig<{
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
interface IInputProps extends ComponentProps<'div'>, VariantProps<typeof inputVariants> {
    children: ReactNode;
}
declare function Input({ children, className, highlight, withButton, size, variant, ...props }: IInputProps): react_jsx_runtime.JSX.Element;
declare namespace Input {
    var Icon: typeof InputIcon;
    var Button: typeof InputButton;
    var Field: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & react.RefAttributes<HTMLInputElement>>;
    var Group: typeof InputGroup;
}

declare const inputMessageVariants: tailwind_variants.TVReturnType<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, "feedback", tailwind_variants_dist_config.TVConfig<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, {
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}>, {
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, "feedback", tailwind_variants_dist_config.TVConfig<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, {
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}>, unknown, unknown, undefined>>;
declare const inputMessageIconVariants: tailwind_variants.TVReturnType<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, {
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}>, {
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, {
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}>, unknown, unknown, undefined>>;
interface IProps$1 extends VariantProps<typeof inputMessageVariants>, ComponentProps<'span'>, VariantProps<typeof inputMessageIconVariants> {
    message?: string;
}
declare function Feedback({ type, className, message, icon, ...props }: IProps$1): react_jsx_runtime.JSX.Element | null;

interface IProps extends ComponentProps<'div'> {
    defaultSelected?: boolean;
    value: unknown;
}
declare function SelectItem({ className, value, defaultSelected, children, ...props }: IProps): react_jsx_runtime.JSX.Element;

declare function SelectList({ className, children, ...props }: ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function SelectTriggerButton({ className, ...props }: ComponentProps<'button'>): react_jsx_runtime.JSX.Element;

declare const selecTriggerVariants: tailwind_variants.TVReturnType<{
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
}, undefined, "br-input", tailwind_variants_dist_config.TVConfig<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
}, undefined, "br-input", tailwind_variants_dist_config.TVConfig<{
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
interface ISelectTriggerProps extends ComponentProps<'div'>, VariantProps<typeof selecTriggerVariants> {
    children: ReactNode;
}
declare function SelectTrigger({ children, className, highlight, size, variant, ...props }: ISelectTriggerProps): react_jsx_runtime.JSX.Element;
declare namespace SelectTrigger {
    var Field: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & react.RefAttributes<HTMLInputElement>>;
    var Button: typeof SelectTriggerButton;
}

interface ISelectProps extends ComponentProps<'div'> {
    className?: string;
    children: react__default.ReactNode;
    onChange?(value: unknown): void;
}
declare function Select({ className, onChange, children, ...props }: ISelectProps): react_jsx_runtime.JSX.Element;
declare namespace Select {
    var Item: typeof SelectItem;
    var List: typeof SelectList;
    var Trigger: typeof SelectTrigger;
}

export { Button, type ButtonProps, Feedback, type IInputProps, type ISelectProps, Input, Label, Select, inputVariants };
