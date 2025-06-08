import { render, screen } from '@testing-library/react';
import { Input, InputButton, InputField, InputGroup, InputIcon } from '..';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
    it('should render applying variants from input', () => {
        render(
            <Input variant="success" withButton highlight data-testid="input">
                <InputGroup>
                    <InputIcon>
                        <i className="fas fa-user-tie" aria-hidden="true" />
                    </InputIcon>
                    <InputField placeholder="Usuário" />
                    <InputButton>
                        <i className="fas fa-user-tie" aria-hidden="true" />
                    </InputButton>
                </InputGroup>
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
                <InputField onChange={onChange} placeholder="testing" />
            </Input>,
        );

        const inputField = screen.getByPlaceholderText(/testing/i);
        await userEvent.type(inputField, 'user type', { delay: 10 });

        expect(onChange).toHaveBeenCalled();
    });
});
