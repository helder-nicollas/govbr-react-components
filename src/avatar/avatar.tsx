import { ComponentProps, forwardRef } from 'react';
import { avatarVariants, AvatarVariants } from './variants';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLSpanElement;
type AvatarProps = ComponentProps<'span'> &
    AvatarVariants & {
        contentProps: ComponentProps<'span'>;
    };

const Avatar = forwardRef<Ref, AvatarProps>(
    ({ className, children, size, contentProps, ...props }) => (
        <div {...props} className={avatarVariants({ className, size })}>
            <span
                {...contentProps}
                className={twMerge('content', contentProps?.className)}
            >
                {children}
            </span>
        </div>
    ),
);

Avatar.displayName = 'Avatar';

export { Avatar, type AvatarProps };
