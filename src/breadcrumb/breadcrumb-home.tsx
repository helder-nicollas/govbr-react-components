import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';

export type BreadcrumbHomeProps<T extends ElementType = 'a'> = {
    className?: string;
    as?: T;
} & ComponentPropsWithoutRef<T>;

export function BreadcrumbHome<T extends ElementType = 'a'>({
    as,
    className,
}: BreadcrumbHomeProps<T>) {
    const Component = as || 'a';

    return (
        <li className={twMerge('crumb home', className)}>
            <Button circle as={Component}>
                <span className="sr-only">Página inicial</span>
                <i className="fas fa-home" />
            </Button>
        </li>
    );
}
