import { Meta, StoryObj } from '@storybook/react/*';
import { Dropdown } from '.';
import { DropdownTrigger } from './drowdown-trigger';
import './d.css';
import { List } from '../list';
import { Item } from '../item';
import { Divider } from '../divider';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    subcomponents: {
        DropdownTrigger,
    },
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
    render: () => {
        return (
            <Dropdown>
                <Dropdown.Trigger />
                <Dropdown.Content>
                    <List>
                        <Item>Item 01</Item>
                        <Divider size="small" />
                        <Item>Item 02</Item>
                        <Divider size="small" />
                        <Item>Item 03</Item>
                    </List>
                </Dropdown.Content>
            </Dropdown>
        );
    },
};
