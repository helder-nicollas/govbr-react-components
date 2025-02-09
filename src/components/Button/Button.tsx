import { ComponentProps, forwardRef } from 'react';
import '@govbr-ds/core/dist/components/button/button.min.css';
import '@govbr-ds/core/dist/components/loading/loading.min.css';
import { buttonVariants, ButtonVariants } from './variants';

type Ref = HTMLButtonElement;

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
            type={type}
            className={buttonVariants({
                variant,
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
export { Button };
