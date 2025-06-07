import { fireEvent, render, screen } from '@testing-library/react';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from '..';
import { Button } from '../../button';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
    it('should render with correct variants', () => {
        render(
            <Modal open>
                {/* Variants */}
                <ModalContent width="large">
                    <ModalHeader withCloseButton>
                        <ModalTitle>Título do modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque Laborum, quis
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>,
        );
        const modalContent = screen.getByRole('dialog');

        expect(modalContent.classList.contains('large')).toBeTruthy();
    });

    it('should call onOpenChange function one time on close modal', async () => {
        const onOpenChange = jest.fn();

        render(
            <Modal open onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader data-testid="header" withCloseButton>
                        <ModalTitle>Título do modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque Laborum, quis
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </ModalFooter>
                </ModalContent>
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
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>Título do modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit Nobis aut doloribus veritatis? Quam placeat
                            delectus repudiandae consectetur accusantium atque
                            recusandae corrupti quaerat, velit fugiat voluptas
                            distinctio cumque itaque Laborum, quis
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline">Sair</Button>
                        <Button>Salvar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>,
        );

        fireEvent.keyDown(container, {
            key: 'Escape',
        });
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
});
