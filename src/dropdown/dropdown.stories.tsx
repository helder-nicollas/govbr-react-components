import { Meta, StoryObj } from '@storybook/react/*';
import { Dropdown } from './dropdown';
import { DropdownTrigger } from './drowdown-trigger';
import { List } from '../list';
import { Item } from '../item';
import { Divider } from '../divider';
import { Button } from '../button';
import { DropdownContent } from './dropdown-content';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    subcomponents: {
        DropdownTrigger,
        DropdownContent,
    },
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
    render: () => {
        return (
            <Dropdown>
                <Dropdown.Trigger>
                    <Button variant="transparent" circle type="button">
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                    </Button>
                </Dropdown.Trigger>
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
