import { VariantProps } from 'tailwind-variants';
import { toastIconVariants, toastVariants } from './variants';
import { Button } from '../button';

export type MessageProps = VariantProps<typeof toastVariants> &
    VariantProps<typeof toastIconVariants> & {
        messageTitle?: string;
        messageBody?: string;
        className?: string;
        onClose?: () => void;
    };

export function Message({
    className,
    icon,
    messageBody,
    messageTitle,
    type,
    onClose,
}: MessageProps) {
    return (
        <div className={toastVariants({ className, type })}>
            <div className="icon">
                <i className={toastIconVariants({ icon })} aria-hidden="true" />
            </div>
            <div
                className="content"
                aria-label="Data de início do afastamento inválida. A data não pode ser superior à data atual."
                role="alert"
            >
                <span className="message-title">{messageTitle}</span>
                <span className="message-body"> {messageBody}</span>
            </div>
            <div className="close" onClick={onClose}>
                <Button
                    circle
                    type="button"
                    aria-label="Fechar a messagem alerta"
                >
                    <i className="fas fa-times" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    );
}
