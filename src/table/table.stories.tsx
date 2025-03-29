import { Meta, StoryObj } from '@storybook/react';
import { Table } from '.';
import { Button } from '../button';
import { Input } from '../input';
import { useState } from 'react';
import { Dropdown } from '../dropdown';
import { List } from '../list';
import { Item } from '../item';

export default {
    title: 'Components/Table',
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
    render: () => {
        const [searchIsOpen, setSearchIsOpen] = useState(false);

        return (
            <Table.Root>
                <Table.Header hiddenSearchIcon={searchIsOpen}>
                    <Table.TopBar>
                        <Table.Title>Tabela padrão</Table.Title>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button circle>
                                    <i
                                        className="fas fa-ellipsis-v"
                                        aria-hidden="true"
                                    ></i>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <List>
                                    <Item>Item 01</Item>
                                    <Item>Item 02</Item>
                                    <Item>Item 03</Item>
                                </List>
                            </Dropdown.Content>
                        </Dropdown>
                        <Button
                            circle
                            onClick={() => setSearchIsOpen(true)}
                            type="button"
                        >
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </Button>
                    </Table.TopBar>
                    <Table.SearchBar show={searchIsOpen}>
                        <Input withButton className="max-w-full">
                            <Input.Field
                                placeholder="Buscar..."
                                name="search"
                            />
                            <Button circle type="button" aria-label="Buscar">
                                <i
                                    className="fas fa-search"
                                    aria-hidden="true"
                                ></i>
                            </Button>
                        </Input>
                        <Button
                            circle
                            onClick={() => setSearchIsOpen(false)}
                            type="button"
                        >
                            <i className="fas fa-times" aria-hidden="true"></i>
                        </Button>
                    </Table.SearchBar>
                </Table.Header>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Fulano de tal</td>
                            <td>18 anos</td>
                        </tr>
                    </tbody>
                </table>
            </Table.Root>
        );
    },
};
