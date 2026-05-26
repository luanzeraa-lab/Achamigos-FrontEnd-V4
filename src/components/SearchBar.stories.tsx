import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    parameters:{
        layout: 'centered',
    },

    decorators: [
    (Story) => (
      <div style={{ padding: '2rem', background: '#f5f5f5', width: '100%', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
}



export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Pesquise aqui',
  },
};

export const Procurando: Story = {
    args:{
        placeholder: 'procurando...',
    }
}

export const Design: Story = {
    args:{
        placeholder: 'procurando...',
    },
    decorators: [
       (Story) => (
      <div style={{ padding: '3rem', background: '#ff8e3c', width: '100%',}}>
        <Story />
      </div>
       ),
    ],
};
