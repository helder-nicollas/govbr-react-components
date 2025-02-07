import { twMerge } from 'tailwind-merge';

export function SelectTriggerRoot({
    className,
    children,
}: React.ComponentProps<'div'>) {
    return <div className={twMerge('br-input', className)}>{children}</div>;
}
