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
                <BreadcrumbList>
                    <BreadcrumbHome />
                    <BreadcrumbItem>
                        <a href="#">Link 01</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <a href="#">Link 02</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <a href="#">Link 03</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <a href="#">Link 04</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <a href="#">Link 05</a>
                    </BreadcrumbItem>
                    <BreadcrumbCurrentPage>Página Atual</BreadcrumbCurrentPage>
                </BreadcrumbList>
            </Breadcrumb>
        );
    },
};
