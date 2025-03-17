import { useState } from 'react';
import { Tab, TabProps } from '../tab';

export function TestingTabComponent({ ...props }: TabProps) {
    const [currentTab, setCurrentTab] = useState('1');

    return (
        <Tab {...props} data-testid="tab">
            <Tab.Nav>
                <Tab.Item onClick={() => setCurrentTab('1')}>
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
                </Tab.Panel>
                <Tab.Panel active={currentTab === '2'}>
                    Todo começo de semana, João tinha um ritual: visitar a
                    pequena cafeteria na esquina da avenida.
                </Tab.Panel>
                <Tab.Panel active={currentTab === '3'}>
                    No ano de 2147, a humanidade havia partido para Marte,
                    deixando para trás apenas um único habitante: um androide
                    chamado Atlas.
                </Tab.Panel>
            </Tab.Content>
        </Tab>
    );
}
