import { render, screen } from '@testing-library/react';
import { Menu } from '../menu';
import userEvent from '@testing-library/user-event';

describe('Menu', () => {
    it('should render component and menu-item with correct variants', () => {
        render(
            <Menu open type="push" size="small" data-testid="menu">
                <Menu.Panel className="max-w-72">
                    <Menu.Header withCloseButton>
                        <Menu.Title>
                            <span>Identificação do site ou Sistema</span>
                        </Menu.Title>
                    </Menu.Header>
                    <Menu.Body>
                        <Menu.Item divider>
                            <Menu.Item.Icon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </Menu.Item.Icon>
                            <Menu.Item.Content>
                                Item de Camada 1
                            </Menu.Item.Content>
                        </Menu.Item>
                    </Menu.Body>
                </Menu.Panel>
            </Menu>,
        );

        const menu = screen.getByTestId('menu');
        const item = menu.querySelector('.menu-item');

        expect(menu.classList.contains('active')).toBeTruthy();
        expect(menu.classList.contains('push')).toBeTruthy();
        expect(menu.classList.contains('small')).toBeTruthy();
        expect(item?.classList.contains('divider')).toBeTruthy();
    });

    it('should dispatch onOpenChange function on click in scrim element', async () => {
        const onOpenChange = jest.fn();
        render(
            <Menu open onOpenChange={onOpenChange} data-testid="menu">
                <Menu.Panel className="max-w-72">
                    <Menu.Header withCloseButton>
                        <Menu.Title>
                            <span>Identificação do site ou Sistema</span>
                        </Menu.Title>
                    </Menu.Header>
                    <Menu.Body>
                        <Menu.Item divider>
                            <Menu.Item.Icon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </Menu.Item.Icon>
                            <Menu.Item.Content>
                                Item de Camada 1
                            </Menu.Item.Content>
                        </Menu.Item>
                    </Menu.Body>
                </Menu.Panel>
            </Menu>,
        );

        const menu = screen.getByTestId('menu');
        const scrim = menu.querySelector('.menu-scrim');

        await userEvent.click(scrim!);
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should dispatch onOpenChange function on button click ', async () => {
        const onOpenChange = jest.fn();
        render(
            <Menu open onOpenChange={onOpenChange} data-testid="menu">
                <Menu.Panel className="max-w-72">
                    <Menu.Header withCloseButton>
                        <Menu.Title>
                            <span>Identificação do site ou Sistema</span>
                        </Menu.Title>
                    </Menu.Header>
                    <Menu.Body>
                        <Menu.Item divider>
                            <Menu.Item.Icon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </Menu.Item.Icon>
                            <Menu.Item.Content>
                                Item de Camada 1
                            </Menu.Item.Content>
                        </Menu.Item>
                    </Menu.Body>
                </Menu.Panel>
            </Menu>,
        );

        const menu = screen.getByTestId('menu');
        const closeButton = menu.querySelector('.menu-close button');

        await userEvent.click(closeButton!);
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
});
