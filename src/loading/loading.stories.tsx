import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './loading';
import { LoadingFill } from './loading-fill';
import { LoadingMask } from './loading-mask';

export default {
    title: 'Components/Loading',
    args: {
        medium: false,
    },
    argTypes: {
        medium: {
            description: 'Aplica o tamanho medium para o loading',
        },
        progressValue: {
            description:
                'Valor atual de carregamento para o loading com porcentagem.',
        },
    },
    component: Loading,
    subcomponents: {
        LoadingFill,
        LoadingMask,
    },
    tags: ['autodocs'],
} as Meta<typeof Loading>;

export const Default: StoryObj<typeof Loading> = {
    render: ({ ...args }) => {
        return <Loading {...args} title="Carregando..." />;
    },
};

export const WithPercentage: StoryObj<typeof Loading> = {
    name: 'Com porcentagem',
    args: {
        progressValue: 50,
    },
    render: ({ ...args }) => {
        return (
            <Loading
                title="Carregando..."
                {...args}
                aria-label="carregando exemplo com porcetagem"
                aria-valuemin={0}
                aria-valuenow={args.progressValue}
                aria-valuemax={100}
            >
                <Loading.Mask full>
                    <Loading.Fill />
                </Loading.Mask>
                <Loading.Mask>
                    <Loading.Fill />
                </Loading.Mask>
            </Loading>
        );
    },
};
