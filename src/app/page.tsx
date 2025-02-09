import {
    Button,
    ButtonLink,
    Select,
    SelectList,
    SelectItem,
    Label,
    Input,
    InputField,
    Feedback,
    InputGroup,
    InputIcon,
    SelectTrigger,
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
                    <SelectTrigger.Root>
                        <SelectTrigger.Field />
                        <SelectTrigger.Button />
                    </SelectTrigger.Root>
                    <SelectList>
                        {array.map(item => (
                            <SelectItem value={item.value} key={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectList>
                </Select>
            </div>
            <div>
                <h2 className="mb-4">Input</h2>
                <Label>Input</Label>
                <Input variant="success" size="medium" withButton>
                    <InputGroup>
                        <InputIcon>
                            <i className="fas fa-user-tie" aria-hidden="true" />
                        </InputIcon>
                        <InputField placeholder="Usuário" />
                    </InputGroup>
                </Input>
                <Feedback message="Sucesso" icon="success" />
            </div>
        </main>
    );
}
