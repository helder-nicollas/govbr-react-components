import { Button } from '@/components/Button';

export default function Home() {
    return (
        <main className="space-y-4 p-4">
            <h1 className="text-3xl font-bold">Componentes</h1>
            <div>
                <h2 className="mb-4">Button</h2>
                <div className="flex gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="transparent">Transparent</Button>
                </div>
            </div>
        </main>
    );
}
