import { render, screen } from '@testing-library/react';
import { Radio } from '../radio';
import { Label } from '../../label';
import userEvent from '@testing-library/user-event';
import { RadioField } from '../radio-field';

describe('Radio', () => {
    it('should render component with correct variants', () => {
        render(
            <Radio variant="valid" disabled data-testid="radio">
                <RadioField id="radio" disabled />
                <Label htmlFor="radio">Opção 01</Label>
            </Radio>,
        );

        const radio = screen.getByTestId('radio');

        expect(radio.classList.contains('valid')).toBeTruthy();
        expect(radio.classList.contains('disabled')).toBeTruthy();
        expect(
            radio.querySelector('input')?.hasAttribute('disabled'),
        ).toBeTruthy();
    });

    it('should call the onChange function on radio click', async () => {
        const onChange = jest.fn();

        render(
            <Radio data-testid="radio">
                <RadioField id="radio" onChange={onChange} />
                <Label htmlFor="radio">Opção 01</Label>
            </Radio>,
        );

        const radio = screen.getByTestId('radio');

        await userEvent.click(radio.querySelector('input')!);

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
