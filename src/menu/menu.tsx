import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
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

export { Menu, type MenuProps };
