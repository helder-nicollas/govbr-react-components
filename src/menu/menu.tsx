import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { MenuHeader } from './menu-header';
import { MenuFooter } from './menu-footer';
import { MenuBody } from './menu-body';
import { MenuPanel } from './menu-panel';
import { MenuTitle } from './menu-title';
import { MenuItem } from './menu-item/menu-item';
import { MenuFolder } from './menu-folder';
import { MenuContext } from './context/menu-context';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';

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
    onOpenChange,
    ...props
}: MenuProps) {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        new BRMenu('br-menu', menuRef.current);
    }, [menuRef]);

    return (
        <MenuContext.Provider value={{ onOpenChange }}>
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
                    {type !== 'push' && (
                        <div
                            className="menu-scrim"
                            tabIndex={0}
                            onClick={onOpenChange}
                        />
                    )}
                </div>
            </div>
        </MenuContext.Provider>
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
