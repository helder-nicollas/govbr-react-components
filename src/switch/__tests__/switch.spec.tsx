import { render, screen } from '@testing-library/react';
import { Switch } from '../switch';
import { userEvent } from '@storybook/test';

describe('Switch component', () => {
    it('should render component with correct variants', () => {
        render(
            <Switch size="lg" align="right" icon id="switch" label="switch" />,
        );

        const switchComponent = screen.getByRole('presentation');

        expect(switchComponent.classList.contains('large')).toBeTruthy();
        expect(switchComponent.classList.contains('icon')).toBeTruthy();
        expect(switchComponent.classList.contains('right')).toBeTruthy();
    });

    it('should call the onSwtich function on change the component checkbox', async () => {
        const onSwitch = jest.fn();
        render(
            <Switch
                onSwitch={onSwitch}
                id="switch"
                label="switch"
                checked={true}
            />,
        );

        const switchInput = screen.getByRole('switch');

        await userEvent.click(switchInput);

        expect(onSwitch).toHaveBeenCalledTimes(1);
    });
});
