import { VariantProps, tv } from 'tailwind-variants';
import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLButtonElement;

const buttonVariants = tv({
    base: '!font-bold',
    variants: {
        color: {
            primary: 'br-button primary',
            secondary: 'br-button !bg-gov-gray-1',
            outline: 'br-button secondary',
            transparent: 'br-button',
        },
        rounded: {
            full: '!rounded-full',
            md: '!rounded-md',
            circle: 'circle',
        },
        size: {
            lg: 'large',
            md: '',
            sm: 'small',
        },
        loading: {
            true: 'loading',
        },
    },
    defaultVariants: {
        color: 'primary',
        rounded: 'md',
        size: 'md',
    },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariants & ComponentProps<'button'>;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        type = 'button',
        className,
        children,
        color,
        rounded,
        size,
        loading,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            className={buttonVariants({
                color,
                rounded,
                size,
                loading,
                className,
            })}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export { Button };
