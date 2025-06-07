import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { headerVariants } from './variants';
import BRHeader from '@govbr-ds/core/dist/components/header/header';

type HeaderProps = ComponentPropsWithoutRef<'header'> &
    VariantProps<typeof headerVariants> & {
        sticky?: boolean;
    };

function Header({
    className,
    size,
    compact,
    children,
    sticky,
    ...props
}: HeaderProps) {
    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!headerRef.current) return;
        new BRHeader('br-header', headerRef.current);
    }, [headerRef]);

    return (
        <header
            {...props}
            className={headerVariants({ className, size, compact })}
            data-sticky={sticky}
            ref={headerRef}
        >
            {children}
        </header>
    );
}

export { Header, type HeaderProps };
