import { useDropdown } from '.';

export function DropdownTrigger() {
    const { handleChangeOpen, open } = useDropdown();

    return (
        <button
            onClick={() => handleChangeOpen(!open)}
            className="br-button circle small"
            type="button"
            id="triggerexample"
            data-toggle="dropdown"
            aria-label="Abrir Acesso Rápido"
            data-target="target"
        >
            <i className="fas fa-ellipsis-v" aria-hidden="true" />
        </button>
    );
}
