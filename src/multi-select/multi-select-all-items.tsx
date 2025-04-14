import { KeyboardEvent } from 'react';
import { Checkbox } from '../checkbox';
import { Item } from '../item';
import { useMultiSelect } from './contexts/multi-select-context';

export function MultiSelectAllItems() {
    const { handleChangeAll, handleChangeAllWithKeyboard, allSelected, id } =
        useMultiSelect();

    return (
        <Item
            data-all="data-all"
            className="highlighted"
            tabIndex={-1}
            selected={allSelected}
            onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                handleChangeAllWithKeyboard(event);
                event.preventDefault();
                event.stopPropagation();
                event.nativeEvent.stopImmediatePropagation();
            }}
        >
            <Checkbox>
                <Checkbox.Field
                    id={`${id}-data-all`}
                    name={`${id}-data-all`}
                    checked={allSelected}
                    onChange={() => {}}
                />
                <label
                    htmlFor={`${id}-data-all`}
                    onClickCapture={event => {
                        handleChangeAll();
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {allSelected ? 'Deselecionar todos' : 'Selecionar todos'}
                </label>
            </Checkbox>
        </Item>
    );
}
