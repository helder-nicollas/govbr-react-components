import { ComponentProps } from 'react';
interface IProps extends ComponentProps<'div'> {
    defaultSelected?: boolean;
    value: unknown;
}
export declare function SelectItem({ className, value, defaultSelected, children, ...props }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
