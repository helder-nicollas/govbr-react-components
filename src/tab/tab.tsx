import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabItem } from './tab-item';
import { TabContent } from './tab-content';
import { TabNav } from './tab-nav';
import { TabPanel } from './tab-panel';

type Ref = HTMLDivElement;

interface ITabComponent
    extends React.ForwardRefExoticComponent<
        ComponentProps<'div'> & React.RefAttributes<Ref>
    > {
    Item: typeof TabItem;
    Content: typeof TabContent;
    Nav: typeof TabNav;
    Panel: typeof TabPanel;
}

const Tab = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('br-tab', className)} ref={ref}>
                {children}
            </div>
        );
    },
) as ITabComponent;

Tab.Item = TabItem;
Tab.Content = TabContent;
Tab.Nav = TabNav;
Tab.Panel = TabPanel;

Tab.displayName = 'Tab';
export { Tab };
