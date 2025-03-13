import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/menu/menu.min.css';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';
import { MenuHeader } from './menu-header';
import { MenuFooter } from './menu-footer';
import { MenuBody } from './menu-body';
import { MenuPanel } from './menu-panel';
import { MenuTitle } from './menu-title';
import { MenuItem } from './menu-item/menu-item';
import { MenuFolder } from './menu-folder';

type MenuProps = ComponentPropsWithoutRef<'div'> & {
    type?: 'push' | 'normal';
    size?: 'small' | 'normal';
    open?: boolean;
    onOpenChange?: () => void;
};

function Menu({
    type = 'normal',
    size = 'normal',
    open,
    className,
    children,
    ...props
}: MenuProps) {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        new BRMenu('br-menu', menuRef.current);
    }, [menuRef]);

    return (
        <div
            {...props}
            ref={menuRef}
            className={twMerge(
                'br-menu',
                type != 'normal' && type,
                size != 'normal' && size,
                open && 'active',
                className,
            )}
        >
            <div className="menu-container">
                {children}
                {type !== 'push' && <div className="menu-scrim" tabIndex={0} />}
            </div>
        </div>
    );
}

Menu.Header = MenuHeader;
Menu.Body = MenuBody;
Menu.Footer = MenuFooter;
Menu.Folder = MenuFolder;
Menu.Panel = MenuPanel;
Menu.Title = MenuTitle;
Menu.Item = MenuItem;

export { Menu, type MenuProps };
