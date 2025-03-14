import { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { headerVariants } from './variants';
import { HeaderTitle } from './header-title';
import { HeaderMenu } from './header-menu';
import { HeaderBottom } from './header-bottom';

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
    return (
        <header
            {...props}
            className={headerVariants({ className, size, compact })}
            data-sticky={sticky}
        >
            {children}
        </header>
    );
}

Header.Title = HeaderTitle;
Header.Menu = HeaderMenu;
Header.Bottom = HeaderBottom;

export { Header, type HeaderProps };
