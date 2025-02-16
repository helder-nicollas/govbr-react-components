import { render, screen } from '@testing-library/react';
import { Divider } from '..';

describe('Divider', () => {
    it('should render the component with correct variants', () => {
        render(<Divider vertical dashed size="large" role="separator" />);
        const divider = screen.getByRole('separator');

        expect(divider.classList.contains('vertical')).toBeTruthy();
        expect(divider.classList.contains('lg')).toBeTruthy();
        expect(divider.classList.contains('dashed')).toBeTruthy();
    });
});
