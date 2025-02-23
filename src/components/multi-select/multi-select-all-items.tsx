import { KeyboardEvent } from 'react';
import { Checkbox } from '../checkbox';
import { Item } from '../item';
import { Label } from '../label';
import { useMultiSelect } from './contexts/multi-select-context';

export function MultiSelectAllItems() {
    const { handleChangeAll, handleChangeAllWithKeyboard, allSelected } =
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
                    id="all-items"
                    name="all-items"
                    checked={allSelected}
                    onChange={() => {}}
                />
                <Label
                    htmlFor="all-items"
                    onClickCapture={event => {
                        handleChangeAll();
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {allSelected ? 'Deselecionar todos' : 'Selecionar todos'}
                </Label>
            </Checkbox>
        </Item>
    );
}
