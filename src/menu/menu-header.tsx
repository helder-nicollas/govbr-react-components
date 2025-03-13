import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';

type Ref = HTMLDivElement;

type MenuHeaderProps = ComponentProps<'div'> & {
    withCloseButton?: boolean;
};

const MenuHeader = forwardRef<Ref, MenuHeaderProps>(
    ({ className, withCloseButton, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-header', className)}
                ref={ref}
            >
                {children}
                {withCloseButton && (
                    <div className="menu-close">
                        <Button
                            variant="transparent"
                            circle
                            type="button"
                            aria-label="Fechar o menu"
                        >
                            <i className="fas fa-times" aria-hidden="true" />
                        </Button>
                    </div>
                )}
            </div>
        );
    },
);

MenuHeader.displayName = 'MenuHeader';
export { MenuHeader };
