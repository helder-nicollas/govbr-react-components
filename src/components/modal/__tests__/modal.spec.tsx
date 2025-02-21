import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '..';
import { Button } from '../../button';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
    it('should render with correct variants', () => {
        render(
            <Modal open>
                {/* Variants */}
                <Modal.Content width="large">
                    <Modal.Header withCloseButton>
                        <Modal.Title>Título do modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque. Laborum, quis.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>,
        );
        const modalContent = screen.getByRole('dialog');

        expect(modalContent.classList.contains('large')).toBeTruthy();
    });

    it('should call onOpenChange function one time on close modal', async () => {
        const onOpenChange = jest.fn();

        render(
            <Modal open onOpenChange={onOpenChange}>
                <Modal.Content>
                    <Modal.Header data-testid="header" withCloseButton>
                        <Modal.Title>Título do modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque. Laborum, quis.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>,
        );
        const closeButton = screen
            .getByTestId('header')
            .querySelector('button');

        await userEvent.click(closeButton!);
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange function one time on close modal with ESC key', () => {
        const onOpenChange = jest.fn();

        const { container } = render(
            <Modal open onOpenChange={onOpenChange}>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Título do modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque. Laborum, quis.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>,
        );

        fireEvent.keyDown(container, {
            key: 'Escape',
        });
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
});
