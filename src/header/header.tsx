import { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { headerVariants } from './variants';
import { HeaderTitle } from './header-title';
import { HeaderMenu } from './header-menu';
import { HeaderBottom } from './header-bottom';
import { HeaderTop } from './header-top';
import { HeaderLogo } from './header-logo';
import { HeaderActions } from './header-actions';
import { HeaderLinks } from './header-links';
import { HeaderFunctions } from './header-functions';
import { HeaderAvatar } from './header-avatar';
import { HeaderSearchTrigger } from './header-search-trigger';
import { HeaderSearch } from './header-search';
import { HeaderSignIn } from './header-sign-in';
import { HeaderSign } from './header-sign';
import { HeaderSubtitle } from './header-subtitle';
import { HeaderLogin } from './header-login';
import { HeaderMenuTrigger } from './header-menu-trigger';
import { HeaderInfo } from './header-info';
import { HeaderSearchClose } from './header-search-close';

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
Header.Top = HeaderTop;
Header.Logo = HeaderLogo;
Header.Actions = HeaderActions;
Header.Links = HeaderLinks;
Header.Functions = HeaderFunctions;
Header.Avatar = HeaderAvatar;
Header.SearchTrigger = HeaderSearchTrigger;
Header.Search = HeaderSearch;
Header.SignIn = HeaderSignIn;
Header.Sign = HeaderSign;
Header.Subtitle = HeaderSubtitle;
Header.Login = HeaderLogin;
Header.MenuTrigger = HeaderMenuTrigger;
Header.Info = HeaderInfo;
Header.SearchClose = HeaderSearchClose;

export { Header, type HeaderProps };
