import { Meta, StoryObj } from '@storybook/react';
import { Divider, IDividerProps } from '.';
import { dividerVariants } from './variants';
import { List } from '../list';
import { Item } from '../item';

export default {
    title: 'Components/Divider',
    component: Divider,
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(dividerVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<IDividerProps>;

export const Default: StoryObj<IDividerProps> = {
    render: args => {
        return (
            <List>
                <Item>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    soluta blanditiis fugiat dolorum facilis corporis velit
                    nulla delectus aperiam, eligendi tenetur libero, incidunt
                    voluptas quas, eum rerum! Quo, sunt sapiente.
                </Item>
                <Divider {...args} />
                <Item>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro magnam, explicabo optio laboriosam modi cum quaerat
                    laudantium. Possimus facere laborum, officia autem illum
                    fuga accusamus impedit cupiditate nobis, qui dignissimos.
                </Item>
                <Divider {...args} />
                <Item>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quos perspiciatis voluptatem harum nihil iure corporis
                    iusto odio numquam aperiam fugit minus magnam sit magni,
                    aliquam corrupti delectus. Mollitia, vel.
                </Item>
            </List>
        );
    },
};
