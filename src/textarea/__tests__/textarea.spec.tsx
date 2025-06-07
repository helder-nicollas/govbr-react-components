import { render, screen } from '@testing-library/react';
import { Textarea, TextareaField } from '..';
import userEvent from '@testing-library/user-event';

describe('Textarea', () => {
    it('should render applying variants from textarea', () => {
        render(
            <Textarea variant="success" size="large">
                <TextareaField data-testid="textarea" />
            </Textarea>,
        );

        const textarea = screen.getByTestId('textarea');
        expect(textarea.classList.contains('success'));
        expect(textarea.classList.contains('large'));
    });

    it('should call onChange function on type', async () => {
        const onChange = jest.fn();

        render(
            <Textarea>
                <TextareaField onChange={onChange} placeholder="testing" />
            </Textarea>,
        );

        const inputField = screen.getByPlaceholderText(/testing/i);
        await userEvent.type(inputField, 'user type', { delay: 10 });

        expect(onChange).toHaveBeenCalled();
    });
});
