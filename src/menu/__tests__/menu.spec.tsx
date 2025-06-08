import { render, screen } from '@testing-library/react';
import { Menu } from '../menu';
import userEvent from '@testing-library/user-event';
import { MenuBody } from '../menu-body';
import { MenuHeader } from '../menu-header';
import { MenuItem, MenuItemIcon, MenuItemContent } from '../menu-item';
import { MenuPanel } from '../menu-panel';
import { MenuTitle } from '../menu-title';

describe('Menu', () => {
    it('should render component and menu-item with correct variants', () => {
        render(
            <Menu open type="push" size="small" data-testid="menu">
                <MenuPanel className="max-w-72">
                    <MenuHeader withCloseButton>
                        <MenuTitle>
                            <span>Identificação do site ou Sistema</span>
                        </MenuTitle>
                    </MenuHeader>
                    <MenuBody>
                        <MenuItem divider>
                            <MenuItemIcon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </MenuItemIcon>
                            <MenuItemContent>Item de Camada 1</MenuItemContent>
                        </MenuItem>
                    </MenuBody>
                </MenuPanel>
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
                <MenuPanel className="max-w-72">
                    <MenuHeader withCloseButton>
                        <MenuTitle>
                            <span>Identificação do site ou Sistema</span>
                        </MenuTitle>
                    </MenuHeader>
                    <MenuBody>
                        <MenuItem divider>
                            <MenuItemIcon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </MenuItemIcon>
                            <MenuItemContent>Item de Camada 1</MenuItemContent>
                        </MenuItem>
                    </MenuBody>
                </MenuPanel>
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
                <MenuPanel className="max-w-72">
                    <MenuHeader withCloseButton>
                        <MenuTitle>
                            <span>Identificação do site ou Sistema</span>
                        </MenuTitle>
                    </MenuHeader>
                    <MenuBody>
                        <MenuItem divider>
                            <MenuItemIcon>
                                <i
                                    className="fas fa-bell"
                                    aria-hidden="true"
                                ></i>
                            </MenuItemIcon>
                            <MenuItemContent>Item de Camada 1</MenuItemContent>
                        </MenuItem>
                    </MenuBody>
                </MenuPanel>
            </Menu>,
        );

        const menu = screen.getByTestId('menu');
        const closeButton = menu.querySelector('.menu-close button');

        await userEvent.click(closeButton!);
        expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
});
