import { ComponentPropsWithoutRef, ElementType } from 'react';
import { magicButtonVariants, MagicButtonVariants } from './variants';

type MagicButtonProps<T extends ElementType = 'button'> =
    MagicButtonVariants & {
        as?: T;
    } & ComponentPropsWithoutRef<T>;

function MagicButton<T extends ElementType = 'button'>({
    as,
    className,
    children,
    circle,
    size,
    ...rest
}: MagicButtonProps<T>) {
    const Component = as || 'button';

    const { base, button } = magicButtonVariants();

    return (
        <div className={base({ size })}>
            <Component {...rest} className={button({ circle, className })}>
                {children}
            </Component>
        </div>
    );
}

export { MagicButton, type MagicButtonProps };
