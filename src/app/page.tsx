import {
    Button,
    ButtonLink,
    Select,
    SelectList,
    SelectItem,
    SelectTriggerRoot,
    SelectTriggerInput,
    Label,
    Input,
    InputField,
    Feedback,
    InputGroup,
    InputIcon,
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
                    <SelectTriggerRoot>
                        <SelectTriggerInput id="name" />
                    </SelectTriggerRoot>
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
                <Input variant="success" size="medium" withButton>
                    <Label>Input</Label>
                    <InputGroup>
                        <InputIcon>
                            <i className="fas fa-user-tie" aria-hidden="true" />
                        </InputIcon>
                        <InputField placeholder="Usuário" />
                    </InputGroup>
                    <Feedback message="Sucesso" icon="success" />
                </Input>
            </div>
        </main>
    );
}
