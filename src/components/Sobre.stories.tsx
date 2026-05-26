import type { Meta, StoryObj } from '@storybook/react';
import Sobre from './Sobre';

const meta: Meta<typeof Sobre> = {
  title: 'Components/Sobre',
  component: Sobre,
  tags: ['autodocs'],
  argTypes: {
    titulo: {
      description: 'Título principal da seção informativa',
      control: 'text',
    },
    texto: {
      description: 'Texto descritivo com o objetivo da seção',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sobre>;


export const Default: Story = {
  args: {
    titulo: 'Objetivo do site',
  },
};

export const Texto: Story = {
  args: {
    titulo: 'Quem somos nós?',
    texto: 'O Achamigos surgiu como um projeto focado em conectar corações. Nosso foco é dar visibilidade para ONGs e protetores independentes que lutam diariamente pela causa animal. Através do nosso sistema, facilitamos o match perfeito entre você e seu futuro pet.',
  },
};

export const Fundo: Story = {
  decorators:[
(Story) => (
      <div style={{ paddingTop: '5%', background: '#f97316', }}>
        <Story />
      </div>
    ),
  ]
};