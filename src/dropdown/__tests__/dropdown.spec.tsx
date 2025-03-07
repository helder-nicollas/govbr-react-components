import { render, screen, waitFor } from '@testing-library/react';
import { Dropdown } from '../dropdown';
import { Button } from '../../button';
import userEvent from '@testing-library/user-event';

describe('', () => {
    it('should render dropdown component', () => {
        render(
            <Dropdown>
                <Dropdown.Trigger>
                    <Button>Abrir</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere, dolor ipsam?
                </Dropdown.Content>
            </Dropdown>,
        );
    });

    it('should not show the dropdown when state is false', () => {
        render(
            <Dropdown>
                <Dropdown.Trigger>
                    <Button>Open</Button>
                </Dropdown.Trigger>
                <Dropdown.Content data-testid="dropdown">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere, dolor ipsam?
                </Dropdown.Content>
            </Dropdown>,
        );

        expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
    });

    it('should show the dropdown when state is true', async () => {
        render(
            <Dropdown>
                <Dropdown.Trigger>
                    <Button>Open</Button>
                </Dropdown.Trigger>
                <Dropdown.Content data-testid="dropdown">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere, dolor ipsam?
                </Dropdown.Content>
            </Dropdown>,
        );

        const button = screen.getByText(/Open/i);
        await userEvent.click(button);

        waitFor(() => {
            expect(screen.getByTestId('dropdown')).toBeInTheDocument();
        });
    });
});
