import { tv } from 'tailwind-variants';
import Link, { LinkProps } from 'next/link';
import { ButtonVariants } from './variants';
import '@govbr-ds/core/dist/components/button/button.min.css';

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

export type ButtonLinkProps = ButtonVariants &
    LinkProps & {
        className?: string;
        children: React.ReactNode;
    };

export function ButtonLink(props: ButtonLinkProps) {
    const { className, children, variant, loading, ...rest } = props;

    return (
        <Link
            className={buttonVariants({
                variant,
                loading,
                className,
            })}
            {...rest}
        >
            {children}
        </Link>
    );
}
