import { Meta, StoryObj } from '@storybook/react/*';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbCurrentPage } from './breadcrumb-current-page';
import { BreadcrumbHome } from './breadcrumb-home';
import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbList } from './breadcrumb-list';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    subcomponents: {
        BreadcrumbCurrentPage,
        BreadcrumbHome,
        BreadcrumbItem,
        BreadcrumbList,
    },
    tags: ['autodocs'],
} as Meta<typeof Breadcrumb>;

export const Default: StoryObj<typeof Breadcrumb> = {
    render: args => {
        return (
            <Breadcrumb {...args}>
                <Breadcrumb.List>
                    <Breadcrumb.Home />
                    <Breadcrumb.Item>
                        <a href="#">Link 01</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Link 02</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Link 03</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Link 04</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Link 05</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.CurrentPage>
                        Página Atual
                    </Breadcrumb.CurrentPage>
                </Breadcrumb.List>
            </Breadcrumb>
        );
    },
};
