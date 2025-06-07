import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useState } from 'react';
import { Tab, TabProps } from '../tab';
import { TabContent } from '../tab-content';
import { TabItem } from '../tab-item';
import { TabNav } from '../tab-nav';
import { TabPanel } from '../tab-panel';

export function TestingTabComponent({ ...props }: TabProps) {
    const [currentTab, setCurrentTab] = useState('1');

    return (
        <Tab {...props} data-testid="tab">
            <TabNav>
                <TabItem onClick={() => setCurrentTab('1')}>
                    <button type="button">Texto 01</button>
                </TabItem>
                <TabItem
                    active={currentTab === '2'}
                    onClick={() => setCurrentTab('2')}
                >
                    <button type="button">Texto 02</button>
                </TabItem>
                <TabItem
                    active={currentTab === '3'}
                    onClick={() => setCurrentTab('3')}
                >
                    <button type="button">Texto 03</button>
                </TabItem>
            </TabNav>
            <TabContent>
                <TabPanel active={currentTab === '1'}>
                    Havia uma casa no fim da rua que ninguém ousava visitar
                </TabPanel>
                <TabPanel active={currentTab === '2'}>
                    Todo começo de semana, João tinha um ritual: visitar a
                    pequena cafeteria na esquina da avenida
                </TabPanel>
                <TabPanel active={currentTab === '3'}>
                    No ano de 2147, a humanidade havia partido para Marte,
                    deixando para trás apenas um único habitante: um androide
                    chamado Atlas
                </TabPanel>
            </TabContent>
        </Tab>
    );
}

describe('Tab', () => {
    it('should render tab component with correct variants', () => {
        render(<TestingTabComponent counter size="small" />);

        const tabComponent = screen.getByTestId('tab');
        expect(tabComponent.classList.contains('small')).toBeTruthy();
        expect(tabComponent.hasAttribute('data-counter')).toBeTruthy();
    });

    it('should change current tab on tab item click', async () => {
        render(<TestingTabComponent counter size="small" />);

        const tabComponent = screen.getByTestId('tab');
        const items = tabComponent.getElementsByClassName('tab-item');
        const panels = tabComponent.getElementsByClassName('tab-panel');

        await userEvent.click(items[1]);

        await waitFor(() => {
            expect(items[1].classList.contains('active')).toBeTruthy();
            expect(panels[1].classList.contains('active')).toBeTruthy();
        });
    });
});
