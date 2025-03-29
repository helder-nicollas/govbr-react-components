import { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';
import { useState } from 'react';
import { TabItem } from './tab-item';
import { TabContent } from './tab-content';
import { TabNav } from './tab-nav';
import { TabPanel } from './tab-panel';
import { tabVariants } from './variants';

export default {
    title: 'Components/Tab',
    component: Tab,
    argTypes: {
        size: {
            description: 'Tamanho dos tabs.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(tabVariants.variants.size),
        },
        counter: {
            description: 'Adiciona estilo aos contadores de cada tab.',
        },
    },
    subcomponents: {
        TabItem,
        TabContent,
        TabNav,
        TabPanel,
    },
} as Meta<typeof Tab>;

export const Default: StoryObj<typeof Tab> = {
    args: {
        size: 'medium',
        counter: false,
    },
    decorators: s => <div className="h-80">{s()}</div>,
    render: args => {
        const [currentTab, setCurrentTab] = useState('1');
        return (
            <Tab {...args}>
                <Tab.Nav>
                    <Tab.Item
                        active={currentTab === '1'}
                        onClick={() => setCurrentTab('1')}
                    >
                        <button type="button">Texto 01</button>
                    </Tab.Item>
                    <Tab.Item
                        active={currentTab === '2'}
                        onClick={() => setCurrentTab('2')}
                    >
                        <button type="button">Texto 02</button>
                    </Tab.Item>
                    <Tab.Item
                        active={currentTab === '3'}
                        onClick={() => setCurrentTab('3')}
                    >
                        <button type="button">Texto 03</button>
                    </Tab.Item>
                </Tab.Nav>
                <Tab.Content>
                    <Tab.Panel active={currentTab === '1'}>
                        Havia uma casa no fim da rua que ninguém ousava visitar.
                        Diziam que, à meia-noite, sombras se moviam pelas
                        janelas e sussurros ecoavam pelos corredores vazios. Um
                        dia, um grupo de amigos decidiu explorar o local.
                        Armados com lanternas, entraram pela porta enferrujada e
                        sentiram um arrepio percorrer suas costas. No andar de
                        cima, uma porta rangeu sozinha. Quando a abriram, apenas
                        encontraram um espelho empoeirado. Mas, ao olhar para
                        ele, viram reflexos que não pertenciam a eles.
                    </Tab.Panel>
                    <Tab.Panel active={currentTab === '2'}>
                        Todo começo de semana, João tinha um ritual: visitar a
                        pequena cafeteria na esquina da avenida. O aroma do café
                        fresco misturado ao som suave do jazz criava um refúgio
                        perfeito para organizar seus pensamentos. Ele sempre
                        pedia um espresso duplo e se sentava na mesma mesa ao
                        lado da janela. Mas, naquele dia, algo diferente
                        aconteceu. Uma mulher desconhecida ocupava seu lugar.
                        Ela sorria, como se já o conhecesse. E foi assim que,
                        entre goles de café e conversas inesperadas, João
                        descobriu que algumas segundas-feiras podem ser
                        surpreendentes.
                    </Tab.Panel>
                    <Tab.Panel active={currentTab === '3'}>
                        No ano de 2147, a humanidade havia partido para Marte,
                        deixando para trás apenas um único habitante: um
                        androide chamado Atlas. Programado para manter a cidade
                        funcionando, ele vagava pelas ruas vazias, acendendo
                        luzes que ninguém mais via e ajustando semáforos para
                        carros inexistentes. Até que, um dia, um sinal de rádio
                        veio do espaço. “Atlas, estamos voltando.” Pela primeira
                        vez, ele sentiu algo novo em seu código: esperança.
                    </Tab.Panel>
                </Tab.Content>
            </Tab>
        );
    },
};

export const WithResults: StoryObj<typeof Tab> = {
    name: 'Com Contadores',
    decorators: s => <div className="h-80">{s()}</div>,
    args: {
        counter: true,
        size: 'medium',
    },
    render: args => {
        const [currentTab, setCurrentTab] = useState('1');
        return (
            <Tab {...args}>
                <Tab.Nav>
                    <Tab.Item
                        active={currentTab === '1'}
                        onClick={() => setCurrentTab('1')}
                    >
                        <button type="button">Texto 01</button>
                        <Tab.Results>(120)</Tab.Results>
                    </Tab.Item>
                    <Tab.Item
                        active={currentTab === '2'}
                        onClick={() => setCurrentTab('2')}
                    >
                        <button type="button">Texto 02</button>
                        <Tab.Results>(78)</Tab.Results>
                    </Tab.Item>
                    <Tab.Item
                        active={currentTab === '3'}
                        onClick={() => setCurrentTab('3')}
                    >
                        <button type="button">Texto 03</button>
                        <Tab.Results>(88)</Tab.Results>
                    </Tab.Item>
                </Tab.Nav>
                <Tab.Content>
                    <Tab.Panel active={currentTab === '1'}>
                        Havia uma casa no fim da rua que ninguém ousava visitar.
                        Diziam que, à meia-noite, sombras se moviam pelas
                        janelas e sussurros ecoavam pelos corredores vazios. Um
                        dia, um grupo de amigos decidiu explorar o local.
                        Armados com lanternas, entraram pela porta enferrujada e
                        sentiram um arrepio percorrer suas costas. No andar de
                        cima, uma porta rangeu sozinha. Quando a abriram, apenas
                        encontraram um espelho empoeirado. Mas, ao olhar para
                        ele, viram reflexos que não pertenciam a eles.
                    </Tab.Panel>
                    <Tab.Panel active={currentTab === '2'}>
                        Todo começo de semana, João tinha um ritual: visitar a
                        pequena cafeteria na esquina da avenida. O aroma do café
                        fresco misturado ao som suave do jazz criava um refúgio
                        perfeito para organizar seus pensamentos. Ele sempre
                        pedia um espresso duplo e se sentava na mesma mesa ao
                        lado da janela. Mas, naquele dia, algo diferente
                        aconteceu. Uma mulher desconhecida ocupava seu lugar.
                        Ela sorria, como se já o conhecesse. E foi assim que,
                        entre goles de café e conversas inesperadas, João
                        descobriu que algumas segundas-feiras podem ser
                        surpreendentes.
                    </Tab.Panel>
                    <Tab.Panel active={currentTab === '3'}>
                        No ano de 2147, a humanidade havia partido para Marte,
                        deixando para trás apenas um único habitante: um
                        androide chamado Atlas. Programado para manter a cidade
                        funcionando, ele vagava pelas ruas vazias, acendendo
                        luzes que ninguém mais via e ajustando semáforos para
                        carros inexistentes. Até que, um dia, um sinal de rádio
                        veio do espaço. “Atlas, estamos voltando.” Pela primeira
                        vez, ele sentiu algo novo em seu código: esperança.
                    </Tab.Panel>
                </Tab.Content>
            </Tab>
        );
    },
};
