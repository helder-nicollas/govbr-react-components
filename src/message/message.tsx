import { VariantProps } from 'tailwind-variants';
import { messageVariants } from './variants';
import { Button } from '../button';

export type MessageProps = VariantProps<typeof messageVariants> & {
    messageTitle?: string;
    messageBody?: string;
    className?: string;
    ariaLabel?: string;
    onClose?: () => void;
};

export function Message({
    className,
    messageBody,
    messageTitle,
    variant,
    ariaLabel,
    onClose,
}: MessageProps) {
    const { base, icon } = messageVariants({ variant, className });

    return (
        <div className={base()} role="alert">
            <div className="icon">
                <i className={icon()} aria-hidden="true" />
            </div>
            <div className="content" aria-label={ariaLabel}>
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
