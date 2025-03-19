import { render, screen } from '@testing-library/react';
import { Checkbox } from '..';
import userEvent from '@testing-library/user-event';
import { Label } from '../../label';

describe('Checkbox', () => {
    it('should render applying variants and disabled state', () => {
        render(
            <Checkbox withoutLabel variant="valid">
                <Checkbox.Field id="checkbox" withoutLabel disabled />
            </Checkbox>,
        );
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox.parentElement).toHaveClass('valid');
        expect(checkbox).toHaveAttribute('disabled');
    });

    it('should call onChange function on change checkbox', async () => {
        const onChange = jest.fn();

        render(
            <Checkbox>
                <Checkbox.Field id="checkbox" onChange={onChange} />
                <Label htmlFor="checkbox">Checkbox 01</Label>
            </Checkbox>,
        );

        const checkboxField = screen.getByRole('checkbox');
        await userEvent.click(checkboxField);
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
