import { render, screen } from '@testing-library/react';
import { Loading } from '../loading';

describe('Loading', () => {
    it('should render component with correct variants', () => {
        render(<Loading medium data-testid="loading" />);

        const loading = screen.getByTestId('loading');

        expect(loading.classList.contains('medium')).toBeTruthy();
    });

    it('should render loading with percentage and correct progressValue prop', () => {
        const progressValue = 50;

        render(
            <Loading progressValue={progressValue} data-testid="loading">
                <Loading.Mask full>
                    <Loading.Fill />
                </Loading.Mask>
                <Loading.Mask>
                    <Loading.Fill />
                </Loading.Mask>
            </Loading>,
        );

        const loading = screen.getByTestId('loading');

        expect(loading.getAttribute('data-progress')).toBe(
            String(progressValue),
        );
    });
});
