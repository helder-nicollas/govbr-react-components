import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Input, InputField } from '../input';
import { useState } from 'react';
import { Dropdown, DropdownContent, DropdownTrigger } from '../dropdown';
import { List } from '../list';
import { Item } from '../item';
import { TableActions } from './table-actions';
import { TableHeader } from './table-header';
import { TableRoot } from './table-root';
import { TableSearchBar } from './table-search-bar';
import { TableTitle } from './table-title';
import { TableTopBar } from './table-top-bar';

export default {
    title: 'Components/Table',
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
    render: () => {
        const [searchIsOpen, setSearchIsOpen] = useState(false);
        const [size, setSize] = useState<'small' | 'medium' | 'large'>(
            'medium',
        );

        return (
            <TableRoot size={size}>
                <TableHeader hiddenSearchIcon={searchIsOpen}>
                    <TableTopBar>
                        <TableTitle>Tabela padrão</TableTitle>
                        <TableActions>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button circle>
                                        <i
                                            className="fas fa-ellipsis-v"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <List>
                                        <Item
                                            as="button"
                                            onClick={() => setSize('small')}
                                        >
                                            Densidade Alta
                                        </Item>
                                        <Item
                                            as="button"
                                            onClick={() => setSize('medium')}
                                        >
                                            Densidade Média
                                        </Item>
                                        <Item
                                            as="button"
                                            onClick={() => setSize('large')}
                                        >
                                            Densidade Baixa
                                        </Item>
                                    </List>
                                </DropdownContent>
                            </Dropdown>
                        </TableActions>
                        <Button
                            circle
                            onClick={() => setSearchIsOpen(true)}
                            type="button"
                        >
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </Button>
                    </TableTopBar>
                    <TableSearchBar show={searchIsOpen}>
                        <Input withButton className="max-w-full">
                            <InputField placeholder="Buscar..." name="search" />
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
                    </TableSearchBar>
                </TableHeader>
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
                            <td>João</td>
                            <td>18 anos</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td>19 anos</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Gustavo</td>
                            <td>20 anos</td>
                        </tr>
                    </tbody>
                </table>
            </TableRoot>
        );
    },
};
