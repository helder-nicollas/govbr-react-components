import { Pagination, PaginationPage } from '..';
import { Button } from '../../button';
import { render, screen } from '@testing-library/react';

describe('Pagination', () => {
    it('should render pagination component', () => {
        render(
            <Pagination>
                <ul>
                    <li>
                        <Button circle type="button" aria-label="Voltar página">
                            <i
                                className="fas fa-angle-left"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>

                    <li>
                        <PaginationPage href="#">1</PaginationPage>
                    </li>
                    <li>
                        <PaginationPage href="#">2</PaginationPage>
                    </li>
                    <li>
                        <PaginationPage href="#">3</PaginationPage>
                    </li>
                    <li>
                        <Button
                            circle
                            type="button"
                            aria-label="Página seguinte"
                        >
                            <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>
                </ul>
            </Pagination>,
        );

        const pagination = screen.getByRole('navigation');

        expect(pagination).toBeInTheDocument();
    });

    it('should apply active class in active page', () => {
        render(
            <Pagination>
                <ul>
                    <li>
                        <Button circle type="button" aria-label="Voltar página">
                            <i
                                className="fas fa-angle-left"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>

                    <li>
                        <PaginationPage href="#" active>
                            1
                        </PaginationPage>
                    </li>
                    <li>
                        <PaginationPage href="#">2</PaginationPage>
                    </li>
                    <li>
                        <PaginationPage href="#">3</PaginationPage>
                    </li>
                    <li>
                        <Button
                            circle
                            type="button"
                            aria-label="Página seguinte"
                        >
                            <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>
                </ul>
            </Pagination>,
        );

        const pagination = screen.getByRole('navigation');

        const activePage = pagination.querySelectorAll('a')[0];
        expect(activePage?.classList.contains('active')).toBeTruthy();
    });
});
