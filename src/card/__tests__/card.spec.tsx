import { render, screen } from '@testing-library/react';
import { Card } from '../card';
import { CardHeader } from '../card-header';
import { CardContent } from '../card-content';
import { CardFooter } from '../card-footer';

describe('Card', () => {
    it('should render', () => {
        render(
            <Card data-testid="card">
                <CardHeader>Header</CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    iusto vero officiis cupiditate, sed non, dolores, nobis
                    recusandae autem molestiae blanditiis? Nam quae veniam,
                    necessitatibus a culpa incidunt ut hic.
                </CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>,
        );
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
    });
    it('should render with disabled state', () => {
        render(
            <Card disabled data-testid="card">
                <CardHeader>Header</CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                    iusto vero officiis cupiditate, sed non, dolores, nobis
                    recusandae autem molestiae blanditiis? Nam quae veniam,
                    necessitatibus a culpa incidunt ut hic
                </CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>,
        );
        const card = screen.getByTestId('card');
        expect(card.classList.contains('disabled')).toBeTruthy();
    });
});
