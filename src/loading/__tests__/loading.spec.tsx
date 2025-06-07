import { render, screen } from '@testing-library/react';
import { Loading } from '../loading';
import { LoadingFill } from '../loading-fill';
import { LoadingMask } from '../loading-mask';

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
                <LoadingMask full>
                    <LoadingFill />
                </LoadingMask>
                <LoadingMask>
                    <LoadingFill />
                </LoadingMask>
            </Loading>,
        );

        const loading = screen.getByTestId('loading');

        expect(loading.getAttribute('data-progress')).toBe(
            String(progressValue),
        );
    });
});
