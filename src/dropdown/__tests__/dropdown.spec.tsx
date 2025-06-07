import { render, screen, waitFor } from '@testing-library/react';
import { Dropdown } from '../dropdown';
import { Button } from '../../button';
import userEvent from '@testing-library/user-event';
import { DropdownContent } from '../dropdown-content';
import { DropdownTrigger } from '../drowdown-trigger';

describe('', () => {
    it('should render dropdown component', () => {
        render(
            <Dropdown>
                <DropdownTrigger>
                    <Button>Abrir</Button>
                </DropdownTrigger>
                <DropdownContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    Facere, dolor ipsam?
                </DropdownContent>
            </Dropdown>,
        );
    });

    it('should not show the dropdown when state is false', () => {
        render(
            <Dropdown>
                <DropdownTrigger>
                    <Button>Open</Button>
                </DropdownTrigger>
                <DropdownContent data-testid="dropdown">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    Facere, dolor ipsam?
                </DropdownContent>
            </Dropdown>,
        );

        expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
    });

    it('should show the dropdown when state is true', async () => {
        render(
            <Dropdown>
                <DropdownTrigger>
                    <Button>Open</Button>
                </DropdownTrigger>
                <DropdownContent data-testid="dropdown">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    Facere, dolor ipsam?
                </DropdownContent>
            </Dropdown>,
        );

        const button = screen.getByText(/Open/i);
        await userEvent.click(button);

        waitFor(() => {
            expect(screen.getByTestId('dropdown')).toBeInTheDocument();
        });
    });
});
