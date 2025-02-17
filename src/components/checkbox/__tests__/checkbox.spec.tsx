import { render, screen } from '@testing-library/react';
import { Checkbox } from '..';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
    it('should render applying variants and disabled state', () => {
        render(<Checkbox variant="valid" disabled label="Checkbox 01" />);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox.parentElement).toHaveClass('valid');
        expect(checkbox).toHaveAttribute('disabled');
    });

    it('should call onChange function on change checkbox', async () => {
        const onChange = jest.fn();

        render(<Checkbox label="Checkbox 01" onChange={onChange} />);

        const checkboxField = screen.getByRole('checkbox');
        await userEvent.click(checkboxField);

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
