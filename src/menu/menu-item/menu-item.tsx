import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { MenuItemIcon } from './menu-item-icon';
import { MenuItemContent } from './menu-item-content';

type MenuItemProps<T extends ElementType = 'a'> =
    ComponentPropsWithoutRef<T> & {
        as?: T;
        divider?: boolean;
    };

function MenuItem<T extends ElementType = 'a'>({
    as,
    divider,
    className,
    children,
    ...props
}: MenuItemProps<T>) {
    const Component = as || 'a';

    return (
        <Component
            {...props}
            className={twMerge('menu-item', divider && 'divider', className)}
            role="treeitem"
        >
            {children}
        </Component>
    );
}

MenuItem.Icon = MenuItemIcon;
MenuItem.Content = MenuItemContent;

export { MenuItem, type MenuItemProps };
