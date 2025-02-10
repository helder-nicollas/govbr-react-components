import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import '@govbr-ds/core/dist/components/message/message.min.css';
declare const inputMessageVariants: import("tailwind-variants").TVReturnType<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, "feedback", import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
    type: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, "feedback", import("tailwind-variants/dist/config").TVConfig<{
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
declare const inputMessageIconVariants: import("tailwind-variants").TVReturnType<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
    icon: {
        success: string;
        danger: string;
        info: string;
        warning: string;
        disabled: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
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
interface IProps extends VariantProps<typeof inputMessageVariants>, ComponentProps<'span'>, VariantProps<typeof inputMessageIconVariants> {
    message?: string;
}
export declare function Feedback({ type, className, message, icon, ...props }: IProps): import("react/jsx-runtime").JSX.Element | null;
export {};
