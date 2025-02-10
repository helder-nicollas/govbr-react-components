import { ComponentProps } from 'react';
import '@govbr-ds/core/dist/components/button/button.min.css';
import '@govbr-ds/core/dist/components/loading/loading.min.css';
import { ButtonVariants } from './variants';
export type ButtonProps = ButtonVariants & ComponentProps<'button'>;
declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
