import { Pagination } from '..';
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
                        <Pagination.Page href="javascript:void(0)">
                            1
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page href="javascript:void(0)">
                            2
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page href="javascript:void(0)">
                            3
                        </Pagination.Page>
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
                        <Pagination.Page href="javascript:void(0)" active>
                            1
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page href="javascript:void(0)">
                            2
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page href="javascript:void(0)">
                            3
                        </Pagination.Page>
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
