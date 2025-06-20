import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Select, SelectItem, SelectList } from '..';
import { SelectTrigger, SelectTriggerField } from '../../select-trigger';

describe('Select', () => {
    const options = [
        {
            label: 'Maçã',
            value: '1',
        },
        {
            label: 'Pera',
            value: '2',
        },
        {
            label: 'Banana',
            value: '3',
        },
    ];

    it('should call the onChangeValue function only one time on click', () => {
        const onChangeValue = jest.fn();

        render(
            <Select
                data-testid="select"
                onChangeValue={onChangeValue}
                id="select"
            >
                <SelectTrigger>
                    <SelectTriggerField id="name" />
                </SelectTrigger>
                <SelectList>
                    {options.map((item, index) => (
                        <SelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectList>
            </Select>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('input');
        fireEvent.click(optionToClick!);
        expect(onChangeValue).toHaveBeenCalledTimes(1);
    });

    it('should call the onChangeValue function only one time on press space or enter key', () => {
        const onChangeValue = jest.fn();

        render(
            <Select
                data-testid="select"
                onChangeValue={onChangeValue}
                id="select"
            >
                <SelectTrigger>
                    <SelectTriggerField id="name" />
                </SelectTrigger>
                <SelectList>
                    {options.map((item, index) => (
                        <SelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectList>
            </Select>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('input');
        fireEvent.keyDown(optionToClick!, { key: 'Enter' });
        fireEvent.keyDown(optionToClick!, { key: ' ' });
        expect(onChangeValue).toHaveBeenCalledTimes(2);
    });

    it('should add expanded attribute to select on input click', () => {
        render(
            <Select id="select">
                <SelectTrigger>
                    <SelectTriggerField id="name" data-testid="trigger" />
                </SelectTrigger>
                <SelectList data-testid="list">
                    {options.map((item, index) => (
                        <SelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectList>
            </Select>,
        );

        const trigger = screen.getByTestId('trigger');
        const list = screen.getByTestId('list');
        fireEvent.click(trigger);
        expect(list.hasAttribute('expanded')).toBeTruthy();
    });

    it('should show not found image on filter item that is not in list', async () => {
        render(
            <Select id="select">
                <SelectTrigger>
                    <SelectTriggerField id="name" data-testid="trigger" />
                </SelectTrigger>
                <SelectList data-testid="list">
                    {options.map((item, index) => (
                        <SelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectList>
            </Select>,
        );

        const trigger = screen.getByTestId('trigger');

        fireEvent.focus(trigger);
        await userEvent.keyboard('melancia', { delay: 100 });
        const notFoundElement = screen
            .getByTestId('list')
            .querySelector('.not-found');

        waitFor(() => {
            expect(notFoundElement).toBeInTheDocument();
        });
    });
});
