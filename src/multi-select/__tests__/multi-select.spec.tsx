import {
    fireEvent,
    getAllByRole,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
    MultiSelect,
    MultiSelectAllItems,
    MultiSelectItem,
    MultiSelectList,
} from '..';
import { SelectTrigger, SelectTriggerField } from '../../select-trigger';

describe('MultiSelect', () => {
    Object.defineProperty(HTMLElement.prototype, 'innerText', {
        get() {
            return this.textContent; // Faz `innerText` retornar o mesmo que `textContent`
        },
    });
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

    it('should call the onChange function only one time on click', () => {
        const onChangeValue = jest.fn();

        render(
            <MultiSelect
                id="multi-select"
                data-testid="multi-select"
                onChangeValue={onChangeValue}
            >
                <SelectTrigger>
                    <SelectTriggerField id="fruits" />
                </SelectTrigger>
                <MultiSelectList>
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('label');
        fireEvent.click(optionToClick!);
        expect(onChangeValue).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange function only one time on press space or enter key', () => {
        const onChange = jest.fn();

        render(
            <MultiSelect
                id="multi-select"
                data-testid="select"
                onChangeValue={onChange}
            >
                <SelectTrigger>
                    <SelectTriggerField id="name" />
                </SelectTrigger>
                <MultiSelectList>
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
        );

        const optionToClick = screen.getByTestId('1').querySelector('label');
        fireEvent.keyDown(optionToClick!, { key: 'Enter' });
        fireEvent.keyDown(optionToClick!, { key: ' ' });
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('should call the onChange function with 3 values on click 3 options', async () => {
        const onChangeValue = jest.fn();

        const { container } = render(
            <MultiSelect
                id="multi-select"
                data-testid="select"
                onChangeValue={onChangeValue}
            >
                <SelectTrigger>
                    <SelectTriggerField id="name" />
                </SelectTrigger>
                <MultiSelectList data-testid="list">
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
        );

        const items = getAllByRole(container, 'option');

        // The [0] position is SelectAll component
        await userEvent.click(items[1].querySelector('label')!);
        await userEvent.click(items[2].querySelector('label')!);
        await userEvent.click(items[3].querySelector('label')!);

        expect(onChangeValue).toHaveBeenLastCalledWith(
            expect.arrayContaining(['1', '2', '3']),
        );
    });

    it('should add expanded attribute to select on label click', () => {
        render(
            <MultiSelect id="multi-select">
                <SelectTrigger>
                    <SelectTriggerField id="name" data-testid="trigger" />
                </SelectTrigger>
                <MultiSelectList data-testid="list">
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            data-testid={String(item.value)}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
        );

        const trigger = screen.getByTestId('trigger');
        const list = screen.getByTestId('list');
        fireEvent.click(trigger);
        expect(list.hasAttribute('expanded')).toBeTruthy();
    });

    it('should show not found image on filter item that is not in list', async () => {
        render(
            <MultiSelect id="multi-select">
                <SelectTrigger>
                    <SelectTriggerField id="name" data-testid="trigger" />
                </SelectTrigger>
                <MultiSelectList data-testid="list">
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
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

    it('should select default values', () => {
        const onChangeValue = jest.fn();
        const { container } = render(
            <MultiSelect id="multi-select" onChangeValue={onChangeValue}>
                <SelectTrigger>
                    <SelectTriggerField id="name" data-testid="trigger" />
                </SelectTrigger>
                <MultiSelectList data-testid="list">
                    <MultiSelectAllItems />
                    {options.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            defaultSelected={['1', '2'].includes(item.value)}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>,
        );

        const items = getAllByRole(container, 'option');

        // The [0] position is SelectAll component
        expect(items[1].classList.contains('selected')).toBeTruthy();
        expect(items[2].classList.contains('selected')).toBeTruthy();
        expect(items[3].classList.contains('selected')).not.toBeTruthy();
    });
});
