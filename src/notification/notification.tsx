import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type NotificationProps = ComponentProps<'div'>;

const Notification = forwardRef<Ref, NotificationProps>(
    ({ className, children, ...props }, ref) => (
        <div
            {...props}
            className={twMerge('br-notification', className)}
            ref={ref}
        >
            {children}
        </div>
    ),
);

Notification.displayName = 'Notification';

export { Notification, type NotificationProps };
