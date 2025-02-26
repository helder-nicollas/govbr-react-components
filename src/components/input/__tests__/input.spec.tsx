import { render, screen } from '@testing-library/react';
import { Input } from '..';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
    it('should render applying variants from input', () => {
        render(
            <Input variant="success" withButton highlight data-testid="input">
                <Input.Group>
                    <Input.Icon>
                        <i className="fas fa-user-tie" aria-hidden="true" />
                    </Input.Icon>
                    <Input.Field placeholder="Usuário" />
                    <Input.Button>
                        <i className="fas fa-user-tie" aria-hidden="true" />
                    </Input.Button>
                </Input.Group>
            </Input>,
        );

        const input = screen.getByTestId('input');
        expect(input.classList.contains('success'));
        expect(input.classList.contains('input-highlight'));
        expect(input.classList.contains('input-button'));
    });

    it('should call onChange function on type', async () => {
        const onChange = jest.fn();

        render(
            <Input>
                <Input.Field onChange={onChange} placeholder="testing" />
            </Input>,
        );

        const inputField = screen.getByPlaceholderText(/testing/i);
        await userEvent.type(inputField, 'user type', { delay: 10 });

        expect(onChange).toHaveBeenCalled();
    });
});
