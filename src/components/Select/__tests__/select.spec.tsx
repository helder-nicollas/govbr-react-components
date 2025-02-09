import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { SelectTrigger } from '../components/SelectTrigger';
import { Select } from '..';

describe('Select', () => {
    const options = [
        {
            label: 'Maçã',
            value: 1,
        },
        {
            label: 'Pera',
            value: 2,
        },
        {
            label: 'Banana',
            value: 3,
        },
    ];

    it('should call the onChange function only one time on click', () => {
        const onChange = jest.fn();

        render(
            <Select.Root data-testid="select" onChange={onChange}>
                <SelectTrigger.Root>
                    <SelectTrigger.Field id="name" />
                    <SelectTrigger.Button />
                </SelectTrigger.Root>
                <Select.List>
                    {options.map(item => (
                        <Select.Item
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select.Root>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('input');
        fireEvent.click(optionToClick!);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange function only one time on press space or enter key', () => {
        const onChange = jest.fn();

        render(
            <Select.Root data-testid="select" onChange={onChange}>
                <SelectTrigger.Root>
                    <SelectTrigger.Field id="name" />
                    <SelectTrigger.Button />
                </SelectTrigger.Root>
                <Select.List>
                    {options.map(item => (
                        <Select.Item
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select.Root>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('input');
        fireEvent.keyDown(optionToClick!, { key: 'Enter' });
        fireEvent.keyDown(optionToClick!, { key: ' ' });
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('should add expanded attribute to select on input click', () => {
        render(
            <Select.Root>
                <SelectTrigger.Root>
                    <SelectTrigger.Field id="name" data-testid="trigger" />
                    <SelectTrigger.Button />
                </SelectTrigger.Root>
                <Select.List data-testid="list">
                    {options.map(item => (
                        <Select.Item value={item.value} key={item.value}>
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select.Root>,
        );

        const trigger = screen.getByTestId('trigger');
        const list = screen.getByTestId('list');
        fireEvent.click(trigger);
        expect(list.hasAttribute('expanded')).toBeTruthy();
    });

    it('should show not found image on filter item that is not in list', async () => {
        render(
            <Select.Root>
                <SelectTrigger.Root>
                    <SelectTrigger.Field id="name" data-testid="trigger" />
                    <SelectTrigger.Button />
                </SelectTrigger.Root>
                <Select.List data-testid="list">
                    {options.map(item => (
                        <Select.Item value={item.value} key={item.value}>
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select.Root>,
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
