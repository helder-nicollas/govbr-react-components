import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type BreacrumbHome<T = void> = T & {
    className?: string;
    LinkAs?: ElementType;
};

export function BreadcrumbHome<T = void>({
    LinkAs = 'a',
    className,
}: BreacrumbHome<T>) {
    return (
        <li className={twMerge('crumb home', className)}>
            <LinkAs className="br-button circle">
                <span className="sr-only">Página inicial</span>
                <i className="fas fa-home" />
            </LinkAs>
        </li>
    );
}
