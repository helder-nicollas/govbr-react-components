import { Meta } from '@storybook/react/*';

export default {
    title: 'Introdução',
    parameters: {
        layout: 'fullscreen', // Abre a página em tela cheia
        docsOnly: true,
    },
    tags: ['!autodocs'],
} as Meta;

export const Introdução = () => (
    <main>
        <header>
            <h1>Govbr React Components</h1>
        </header>

        <h2>Objetivo</h2>
        <p>
            Esta biblioteca foi desenvolvida com as especificações do DSGOV. Seu
            principal objetivo é fornecer componentes flexíveis, de fácil
            utilização e performáticos sem a necessidade de importar ou acessar
            diretamente o core do DSGOV. Para isso, foram utilizados vários
            padrões de componentização e boas práticas para trazer uma melhor
            Dev experience aos desenvolvedores.
        </p>
    </main>
);
