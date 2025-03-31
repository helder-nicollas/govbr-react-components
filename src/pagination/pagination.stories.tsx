/* eslint-disable no-extra-boolean-cast */
import { Meta, StoryObj } from '@storybook/react/*';
import { Pagination } from './pagination';
import { Button } from '../button';
import { useEffect, useRef, useState } from 'react';
import BRPagination from '@govbr-ds/core/dist/components/pagination/pagination';
import { TestingPagination } from './testing-pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
} as Meta<typeof Pagination>;

export const Default: StoryObj<typeof Pagination> = {
    render: ({ ...args }) => {
        const PAGE_LIMIT = 3;
        type Pagination = {
            page: number;
            prev: number | null;
            next: number | null;
        };
        const [pagination, setPagination] = useState<Pagination>({
            prev: null,
            page: 1,
            next: 2,
        });

        const handleChangePage = (
            page: number,
            next: number | null,
            prev: number | null,
        ) => {
            setPagination({ page, next, prev });
        };

        const handleIncrementPage = () => {
            setPagination(state => {
                if (state.page < PAGE_LIMIT) {
                    if (Number(state.next) + 1 > PAGE_LIMIT) {
                        return {
                            page: state.page + 1,
                            next: null,
                            prev: Number(state.prev) + 1,
                        };
                    }
                    return {
                        page: state.page + 1,
                        next: Number(state.next) + 1,
                        prev: Number(state.prev) + 1,
                    };
                } else return state;
            });
        };

        const handleDecrementPage = () => {
            setPagination(state => {
                if (state.page > 1) {
                    if (!state.next)
                        return {
                            page: state.page - 1,
                            next: PAGE_LIMIT - 1,
                            prev: Number(state.prev) - 1,
                        };

                    if (Number(state.prev) - 1 < 1)
                        return {
                            page: state.page - 1,
                            next: Number(state.next) - 1,
                            prev: null,
                        };

                    return {
                        page: state.page - 1,
                        next: Number(state.next) - 1,
                        prev: Number(state.prev) - 1,
                    };
                } else return state;
            });
        };

        return (
            <Pagination {...args}>
                <ul>
                    <li>
                        <Button
                            circle
                            type="button"
                            aria-label="Voltar página"
                            disabled={!!!pagination.prev}
                            onClick={handleDecrementPage}
                        >
                            <i
                                className="fas fa-angle-left"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>

                    <li>
                        <Pagination.Page
                            href="javascript:void(0)"
                            active={pagination.page === 1}
                            onClick={() => handleChangePage(1, 2, null)}
                        >
                            1
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page
                            href="javascript:void(0)"
                            active={pagination.page === 2}
                            onClick={() => handleChangePage(2, 3, 1)}
                        >
                            2
                        </Pagination.Page>
                    </li>
                    <li>
                        <Pagination.Page
                            href="javascript:void(0)"
                            active={pagination.page === 3}
                            onClick={() => handleChangePage(3, null, 2)}
                        >
                            3
                        </Pagination.Page>
                    </li>
                    <li>
                        <Button
                            circle
                            type="button"
                            aria-label="Página seguinte"
                            disabled={!!!pagination.next}
                            onClick={handleIncrementPage}
                        >
                            <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                            />
                        </Button>
                    </li>
                </ul>
            </Pagination>
        );
    },
};

export const Context: StoryObj = {
    render: () => {
        const ref = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            if (ref.current) new BRPagination('br-pagination', ref.current);
            console.log('nees');
        }, [ref]);
        return <TestingPagination />;
    },
};
