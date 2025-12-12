import { Meta, StoryObj } from '@storybook/react/*';
import { Avatar } from './avatar';
import { avatarVariants } from './variants';
import { SignIn } from '../sign-in';
import { DropdownContent, DropdownTrigger, Dropdown } from '../dropdown';
import { List } from '../list';
import { Item } from '../item';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            description: 'Tamanho do avatar.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(avatarVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {
    args: {
        size: 'sm',
    },
    render: args => (
        <Avatar {...args}>
            <img src="https://picsum.photos/id/1005/400" alt="Avatar" />
        </Avatar>
    ),
};

export const Icon: StoryObj<typeof Avatar> = {
    args: {
        size: 'sm',
    },
    render: args => (
        <Avatar {...args}>
            <i className="fas fa-user" aria-hidden="true" />
        </Avatar>
    ),
};

export const DropdownAvatar: StoryObj<typeof Avatar> = {
    args: {
        size: 'sm',
        contentProps: {
            className: '!bg-orange-500',
        },
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    render: args => (
        <Dropdown>
            <DropdownTrigger>
                <SignIn
                    variant="secondary"
                    type="button"
                    className="h-auto p-2"
                >
                    <Avatar {...args} title="Fulano da Silva" className="">
                        F
                    </Avatar>
                    <span className="ml-2 text-gray-800 text-xs">
                        Olá, <span className="font-semibold">Fulano</span>
                    </span>
                    <i className="fas fa-caret-down" aria-hidden="true" />
                </SignIn>
            </DropdownTrigger>
            <DropdownContent>
                <List role="menu">
                    <Item className="text-sm" as="button" role="menuitem">
                        Dados pessoais
                    </Item>
                    <Item className="text-sm" as="button" role="menuitem">
                        Privacidade
                    </Item>
                    <Item className="text-sm" as="button" role="menuitem">
                        Notificações
                    </Item>
                    <Item className="text-sm" as="button" role="menuitem">
                        Perguntas frequentes
                    </Item>
                </List>
            </DropdownContent>
        </Dropdown>
    ),
};
