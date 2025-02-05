import {
    Button,
    ButtonLink,
    Select,
    SelectList,
    SelectItem,
    SelectTriggerRoot,
    SelectTriggerInput,
} from '@/components';

const array = [
    {
        label: 'Maçã',
        id: 1,
    },
    {
        label: 'Pera',
        id: 2,
    },
    {
        label: 'Banana',
        id: 3,
    },
];

export default function Home() {
    return (
        <main className="space-y-4 p-4">
            <h1 className="text-3xl font-bold">Componentes</h1>
            <div>
                <h2 className="mb-4">Button</h2>
                <div className="flex gap-4">
                    <ButtonLink href="/" variant="primary">
                        Primary
                    </ButtonLink>
                    <Button variant="outline">Outline</Button>
                    <Button variant="transparent">Transparent</Button>
                </div>
            </div>
            <div>
                <h2 className="mb-4">Select</h2>
                <Select>
                    <SelectTriggerRoot>
                        <SelectTriggerInput />
                    </SelectTriggerRoot>
                    <SelectList>
                        {array.map(item => (
                            <SelectItem
                                value={item.id}
                                key={item.id}
                                defaultSelected={item.id === 2}
                            >
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectList>
                </Select>
            </div>
        </main>
    );
}
