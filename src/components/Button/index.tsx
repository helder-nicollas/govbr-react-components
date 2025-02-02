import { VariantProps, tv } from 'tailwind-variants';
import { ComponentProps, forwardRef } from 'react';
import '@govbr-ds/core/dist/components/button/button.min.css';

type Ref = HTMLButtonElement;

const buttonVariants = tv({
    base: 'br-button',
    variants: {
        variant: {
            primary: 'primary',
            outline: 'secondary',
            transparent: '',
        },
        loading: {
            true: 'loading',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariants & ComponentProps<'button'>;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        type = 'button',
        className,
        children,
        variant,
        loading,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            className={buttonVariants({
                variant,
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
