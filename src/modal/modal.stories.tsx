import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalBody, ModalProps } from '.';
import { ModalHeader } from './modal-header';
import { ModalTitle } from './modal-title';
import { ModalFooter } from './modal-footer';
import { ModalContent } from './modal-content';
import { Button } from '../button';
import { useState } from 'react';

export default {
    title: 'Components/Modal',
    component: Modal,
    subcomponents: {
        ModalHeader,
        ModalTitle,
        ModalFooter,
        ModalContent,
    },
    tags: ['autodocs'],
} as Meta<ModalProps>;

export const Default: StoryObj<ModalProps> = {
    decorators: s => <div className="h-80">{s()}</div>,
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)} variant="primary">
                    Abrir modal
                </Button>
                <Modal open={open} onOpenChange={() => setOpen(false)}>
                    <ModalContent>
                        <ModalHeader withCloseButton>
                            <ModalTitle>Título do modal</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit Nobis aut doloribus veritatis?
                                Quam placeat delectus repudiandae consectetur
                                accusantium atque recusandae corrupti quaerat,
                                velit fugiat voluptas distinctio cumque itaque
                                Laborum, quis
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="outline">Sair</Button>
                            <Button variant="primary">Salvar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
};
