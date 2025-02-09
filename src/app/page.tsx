import {
    Button,
    ButtonLink,
    Label,
    Input,
    Feedback,
    Select,
} from '@/components';

const array = [
    {
        label: 'Maçã',
        value: '1',
    },
    {
        label: 'Pera',
        value: '2',
    },
    {
        label: 'Banana',
        value: '3',
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
                    <Select.Trigger>
                        <Select.Trigger.Field />
                        <Select.Trigger.Button />
                    </Select.Trigger>
                    <Select.List>
                        {array.map(item => (
                            <Select.Item value={item.value} key={item.value}>
                                {item.label}
                            </Select.Item>
                        ))}
                    </Select.List>
                </Select>
            </div>
            <div>
                <h2 className="mb-4">Input</h2>
                <div className="space-y-2">
                    <Label>Input</Label>
                    <Input variant="success" size="medium" withButton>
                        <Input.Group>
                            <Input.Icon>
                                <i
                                    className="fas fa-user-tie"
                                    aria-hidden="true"
                                />
                            </Input.Icon>
                            <Input.Field placeholder="Usuário" />
                        </Input.Group>
                    </Input>
                    <Feedback message="Sucesso" icon="success" />
                </div>
            </div>
        </main>
    );
}
