import { render, screen } from '@testing-library/react';
import { Avatar } from '../avatar';

describe('Avatar', () => {
    it('should apply correct variants to component', () => {
        render(
            <Avatar size="lg" data-testid="avatar">
                F
            </Avatar>,
        );

        const avatar = screen.getByTestId('avatar');

        expect(avatar.classList.contains('large')).toBeTruthy();
    });
});
