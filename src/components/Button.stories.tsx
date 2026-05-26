import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Texto que será exibido dentro do botão',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    title: 'Clique Aqui',
  },
};

export const Enviar: Story = {
  args: {
    title: 'Cadastrar Pet',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Carregando...',
    disabled: true,
  },
};