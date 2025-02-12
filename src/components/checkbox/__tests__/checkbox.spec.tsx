import { render, screen } from '@testing-library/react';
import { Checkbox } from '..';
import { Label } from '../../label';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
    it('should render applying variants', () => {
        render(
            <>
                <Checkbox variant="valid">
                    <Checkbox.Field role="checkbox" id="checkbox" />
                </Checkbox>
                <Label htmlFor="checkbox" className="cursor-pointer">
                    Checkbox 01
                </Label>
            </>,
        );
        const checkboxRoot = screen.getByRole('checkbox').parentElement;

        expect(checkboxRoot).toHaveClass('valid');
    });

    it('should call onChange function on change checkbox', async () => {
        const onChange = jest.fn();

        render(
            <>
                <Checkbox>
                    <Checkbox.Field
                        role="checkbox"
                        id="checkbox"
                        onChange={onChange}
                    />
                </Checkbox>
                <Label htmlFor="checkbox" className="cursor-pointer">
                    Checkbox 01
                </Label>
            </>,
        );

        const checkboxField = screen.getByRole('checkbox');
        await userEvent.click(checkboxField);

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
