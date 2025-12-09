import { render, screen } from '@testing-library/react';
import { MagicButton } from '..';
import { userEvent } from '@storybook/test';

describe('MagicButton', () => {
    it('should call onCLick function on click the button', async () => {
        const onClick = jest.fn();

        render(
            <MagicButton onClick={onClick} data-testid="button">
                Botão
            </MagicButton>,
        );

        const button = screen.getByTestId('button');

        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
