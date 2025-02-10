import React, { ComponentProps } from 'react';
import '@govbr-ds/core/dist/components/select/select.min.css';
import '@govbr-ds/core/dist/components/list/list.min.css';
import '@govbr-ds/core/dist/components/item/item.min.css';
import '@govbr-ds/core/dist/components/radio/radio.min.css';
import { SelectItem } from './SelectItem';
import { SelectList } from './SelectList';
import { SelectTrigger } from './SelectTrigger';
export interface ISelectProps extends ComponentProps<'div'> {
    className?: string;
    children: React.ReactNode;
    onChange?(value: unknown): void;
}
declare function Select({ className, onChange, children, ...props }: ISelectProps): import("react/jsx-runtime").JSX.Element;
declare namespace Select {
    var Item: typeof SelectItem;
    var List: typeof SelectList;
    var Trigger: typeof SelectTrigger;
}
export { Select };
