'use client';
export function SelectTriggerInput({
    placeholder,
    ...props
}: React.ComponentProps<'input'>) {
    return (
        <>
            <input
                type="text"
                autoComplete="off"
                placeholder={placeholder || 'Selecione um item'}
                {...props}
            />
            <button
                className="br-button"
                type="button"
                aria-label="Exibir lista"
                tabIndex={-1}
                data-trigger="data-trigger"
            >
                <i className="fas fa-angle-down" aria-hidden="true" />
            </button>
        </>
    );
}
