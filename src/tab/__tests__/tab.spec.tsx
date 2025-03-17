import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestingTabComponent } from './testing-tab-component';

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
