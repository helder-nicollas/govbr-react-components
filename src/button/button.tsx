import { ComponentProps, forwardRef } from 'react';
import { buttonVariants, ButtonVariants } from './variants';
import '@govbr-ds/core/dist/components/button/button.min.css';
import '@govbr-ds/core/dist/components/loading/loading.min.css';

type Ref = HTMLButtonElement;

type ButtonProps = ButtonVariants & ComponentProps<'button'>;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        type = 'button',
        className,
        children,
        circle,
        variant,
        loading,
        size,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            type={type}
            className={buttonVariants({
                variant,
                circle,
                size,
                loading,
                className,
            })}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export { Button, type ButtonProps };
