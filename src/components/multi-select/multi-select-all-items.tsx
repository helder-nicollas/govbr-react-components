import { Item } from '../item';
import { useMultiSelect } from './contexts/multi-select-context';

export function MultiSelectAllItems() {
    const { handleChangeAll, handleChangeAllWithKeyboard, allSelected } =
        useMultiSelect();

    return (
        <Item data-all="data-all" tabIndex={-1} selected={allSelected}>
            <div className="br-checkbox">
                <input
                    id="all-items"
                    name="all-items"
                    type="checkbox"
                    checked={allSelected}
                    onChange={() => {}}
                    onKeyDown={event => {
                        handleChangeAllWithKeyboard(event);
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                />
                <label
                    htmlFor={'all-items'}
                    onClickCapture={event => {
                        handleChangeAll();
                        event.preventDefault();
                        event.stopPropagation();
                        event.nativeEvent.stopImmediatePropagation();
                    }}
                >
                    {allSelected ? 'Deselecionar todos' : 'Selecionar todos'}
                </label>
            </div>
        </Item>
    );
}
