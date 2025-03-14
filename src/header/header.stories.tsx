import { Meta, StoryObj } from '@storybook/react/*';
import { Header } from './header';
import '@govbr-ds/core/dist/components/header/header.min.css';

export default {
    component: Header,
    decorators: story => <div className="h-96">{story()}</div>,
    title: 'Components/Header',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof Header>;

export const Defult: StoryObj<typeof Header> = {
    render: args => {
        return (
            <Header {...args}>
                <div className="container m-auto">
                    <Header.Bottom>
                        <Header.Menu>
                            <Header.Title>Título do projeto</Header.Title>
                        </Header.Menu>
                    </Header.Bottom>
                </div>
            </Header>
        );
    },
};
