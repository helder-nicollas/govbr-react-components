import { render, screen } from '@testing-library/react';
import { Button } from '..';
describe('Button', () => {
    it('should render', () => {
        render(<Button>Botão</Button>);
        const button = screen.getByText(/botão/i);
        expect(button).toBeInTheDocument();
    });

    it('should enable loading state', () => {
        render(<Button loading>Botão</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(/loading/i);
    });
});
