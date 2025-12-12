import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type NotificationBodyProps = ComponentProps<'div'>;

const NotificationBody = forwardRef<Ref, NotificationBodyProps>(
    ({ className, children, ...props }, ref) => (
        <div
            {...props}
            className={twMerge('notification-body', className)}
            ref={ref}
        >
            {children}
        </div>
    ),
);

NotificationBody.displayName = 'NotificationBody';

export { NotificationBody, type NotificationBodyProps };
