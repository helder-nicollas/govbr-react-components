import { ComponentProps, forwardRef } from 'react';
import { TabItem } from './tab-item';
import { TabContent } from './tab-content';
import { TabNav } from './tab-nav';
import { TabPanel } from './tab-panel';
import { VariantProps } from 'tailwind-variants';
import { tabVariants } from './variants';
import { TabResults } from './tab-results';

type Ref = HTMLDivElement;

type TabProps = ComponentProps<'div'> &
    VariantProps<typeof tabVariants> & {
        counter?: boolean;
    };

interface ITabComponent
    extends React.ForwardRefExoticComponent<
        TabProps & React.RefAttributes<Ref>
    > {
    Item: typeof TabItem;
    Content: typeof TabContent;
    Nav: typeof TabNav;
    Panel: typeof TabPanel;
    Results: typeof TabResults;
}

const Tab = forwardRef<Ref, TabProps>(
    ({ className, children, size, counter, ...props }, ref) => {
        return (
            <div
                {...props}
                {...(counter && { 'data-counter': true })}
                className={tabVariants({ size, className })}
                ref={ref}
            >
                {children}
            </div>
        );
    },
) as ITabComponent;

Tab.Item = TabItem;
Tab.Content = TabContent;
Tab.Nav = TabNav;
Tab.Panel = TabPanel;
Tab.Results = TabResults;

Tab.displayName = 'Tab';
export { Tab, type TabProps };
