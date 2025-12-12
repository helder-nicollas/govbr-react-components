import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type NotificationHeaderProps = ComponentProps<'div'>;

const NotificationHeader = forwardRef<Ref, NotificationHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            {...props}
            className={twMerge('notification-header', className)}
            ref={ref}
        >
            {children}
        </div>
    ),
);

NotificationHeader.displayName = 'NotificationHeader';

export { NotificationHeader, type NotificationHeaderProps };
