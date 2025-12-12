import { Meta, StoryObj } from '@storybook/react';
import { Notification } from '.';
import { NotificationBody } from '.';
import { NotificationHeader } from '.';
import { Tab, TabContent, TabItem, TabNav, TabPanel } from '../tab';
import { useState } from 'react';
import { List } from '../list';
import { Item } from '../item';

export default {
    title: 'Components/Notification',
    component: Notification,
    subcomponents: {
        NotificationHeader,
        NotificationBody,
    },
    tags: ['autodocs'],
} as Meta<typeof Notification>;

export const Default: StoryObj<typeof Notification> = {
    render: args => {
        const [selected, setSelected] = useState('mail');
        return (
            <Notification {...args}>
                <NotificationHeader>
                    <h3 className="font-bold">Fulano da Silva</h3>
                    <span className="text-xs">nome.sobrenome@dominio.gov</span>
                </NotificationHeader>
                <NotificationBody>
                    <Tab>
                        <TabNav>
                            <ul>
                                <TabItem
                                    active={selected == 'mail'}
                                    onClick={() => setSelected('mail')}
                                >
                                    <button>
                                        <span className="name">
                                            <i
                                                className="fas fa-envelope"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </button>
                                </TabItem>
                                <TabItem
                                    active={selected == 'bell'}
                                    onClick={() => setSelected('bell')}
                                >
                                    <button>
                                        <span className="name">
                                            <i
                                                className="fas fa-bell"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </button>
                                </TabItem>
                            </ul>
                        </TabNav>
                        <TabContent>
                            <TabPanel active={selected == 'mail'}>
                                <List>
                                    <Item
                                        as="button"
                                        type="button"
                                        role="contentinfo"
                                        aria-label="Especificar aqui a mensagem de alerta a ser informado pelo leitor de tela"
                                    >
                                        <span className="br-tag status small warning"></span>
                                        <span className="font-bold block">
                                            Título
                                        </span>
                                        <span className="font-medium block mb-2">
                                            25 de out
                                        </span>
                                        <span>
                                            Nostrud consequat culpa ex mollit
                                            aute. Ex ex veniam ea labore laboris
                                            duis duis elit. Ex aute dolor enim
                                            aute Lorem dolor. Duis labore ad
                                            anim culpa. Non aliqua excepteur
                                            sunt eiusmod ex consectetur ex esse
                                            laborum velit ut aute.
                                        </span>
                                    </Item>
                                    <Item as="button" type="button">
                                        <span className="font-bold block">
                                            Título
                                        </span>
                                        <span className="font-medium block mb-2">
                                            24 de out
                                        </span>
                                        <span>
                                            Labore nulla elit laborum nulla
                                            duis. Deserunt ad nulla commodo
                                            occaecat nulla proident ea proident
                                            aliquip dolore sunt nulla. Do sit eu
                                            consectetur quis culpa. Eiusmod
                                            minim irure sint nulla incididunt
                                            occaecat ipsum mollit in ut. Minim
                                            adipisicing veniam adipisicing velit
                                            nostrud duis consectetur aute nulla
                                            deserunt culpa aliquip.
                                        </span>
                                    </Item>
                                    <Item
                                        as="button"
                                        type="button"
                                        role="contentinfo"
                                        aria-label="Escrever aqui a mensagem de alerta que será informada pelo leitor de tela"
                                    >
                                        <span className="font-bold block">
                                            Título
                                        </span>
                                        <span className="font-medium block mb-2">
                                            03 de out
                                        </span>
                                        <span>
                                            Duis qui dolor dolor qui sint
                                            consectetur. Ipsum eu dolore ex anim
                                            reprehenderit laborum commodo.
                                            Labore do ut nulla eiusmod
                                            consectetur.
                                        </span>
                                    </Item>
                                    <Item as="button" type="button">
                                        <span className="font-bold block">
                                            Título
                                        </span>
                                        <span className="font-medium block mb-2">
                                            16 de mai
                                        </span>
                                        <span>
                                            Sunt velit dolor enim mollit
                                            incididunt irure est. Ad ea Lorem
                                            culpa quis occaecat sunt in
                                            exercitation nisi. Sit laborum
                                            laborum dolor culpa ipsum velit. Non
                                            nulla nisi dolore et anim consequat
                                            officia deserunt amet qui.
                                            Incididunt exercitation irure labore
                                            ut Lorem culpa. Dolore ea irure
                                            pariatur ullamco culpa veniam amet
                                            dolor in fugiat pariatur ut. Sit non
                                            ut enim et incididunt tempor irure
                                            pariatur ex proident labore cillum
                                            dolore nisi.
                                        </span>
                                    </Item>
                                </List>
                            </TabPanel>
                            <TabPanel active={selected == 'bell'}>
                                <List>
                                    <Item as="button" type="button">
                                        <i
                                            className="fas fa-heartbeat mr-2"
                                            aria-hidden="true"
                                        />
                                        Link de Acesso
                                    </Item>
                                    <Item as="button" type="button">
                                        <i
                                            className="fas fa-heartbeat mr-2"
                                            aria-hidden="true"
                                        />
                                        Link de Acesso
                                    </Item>
                                    <Item as="button" type="button">
                                        <i
                                            className="fas fa-heartbeat mr-2"
                                            aria-hidden="true"
                                        />
                                        Link de Acesso
                                    </Item>
                                </List>
                            </TabPanel>
                        </TabContent>
                    </Tab>
                </NotificationBody>
            </Notification>
        );
    },
};
