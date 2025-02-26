import { render, screen } from '@testing-library/react';
import { Card } from '..';

describe('Card', () => {
    it('should render', () => {
        render(
            <Card data-testid="card">
                <Card.Header>Header</Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    iusto vero officiis cupiditate, sed non, dolores, nobis
                    recusandae autem molestiae blanditiis? Nam quae veniam,
                    necessitatibus a culpa incidunt ut hic.
                </Card.Content>
                <Card.Footer>Footer</Card.Footer>
            </Card>,
        );
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
    });
    it('should render with disabled state', () => {
        render(
            <Card disabled data-testid="card">
                <Card.Header>Header</Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    iusto vero officiis cupiditate, sed non, dolores, nobis
                    recusandae autem molestiae blanditiis? Nam quae veniam,
                    necessitatibus a culpa incidunt ut hic.
                </Card.Content>
                <Card.Footer>Footer</Card.Footer>
            </Card>,
        );
        const card = screen.getByTestId('card');
        expect(card.classList.contains('disabled')).toBeTruthy();
    });
});
