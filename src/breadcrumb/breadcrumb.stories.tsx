import { Meta, StoryObj } from '@storybook/react/*';
import { Breadcrumb } from './breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
} as Meta<typeof Breadcrumb>;

export const Default: StoryObj<typeof Breadcrumb> = {
    render: args => {
        return (
            <Breadcrumb {...args}>
                <Breadcrumb.List>
                    <Breadcrumb.Home />
                    <Breadcrumb.Item>
                        <a href="a">Link 01</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="a">Link 02</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="a">Link 03</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="a">Link 04</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="a">Link 05</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.CurrentPage />
                </Breadcrumb.List>
            </Breadcrumb>
        );
    },
};
