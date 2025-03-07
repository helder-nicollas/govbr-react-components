import { VariantProps } from 'tailwind-variants';
import { iconVariants, messageVariants } from './variants';
import { Button } from '../button';

export type MessageProps = VariantProps<typeof messageVariants> &
    VariantProps<typeof iconVariants> & {
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
        <div className={messageVariants({ className, type })} role="alert">
            <div className="icon">
                <i className={iconVariants({ icon })} aria-hidden="true" />
            </div>
            <div
                className="content"
                aria-label="Data de início do afastamento inválida. A data não pode ser superior à data atual."
            >
                <span className="message-title">{messageTitle}</span>
                <span className="message-body"> {messageBody}</span>
            </div>
            <div className="close" onClick={onClose}>
                <Button
                    circle
                    type="button"
                    variant="transparent"
                    aria-label="Fechar a messagem alerta"
                >
                    <i className="fas fa-times" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    );
}
