import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    version: {
      description: 'Versão do sistema exibida nos direitos reservados',
      control: 'text',
    },
    telefone: {
      description: 'Número de contato exibido no hover do telefone',
      control: 'text',
    },
    linkInstagram: {
      description: 'URL de redirecionamento do Instagram',
      control: 'text',
    }
  },

  decorators:[],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    version: '4.2.1',
    telefone: '(11) 98888-7777',
    linkInstagram: 'https://instagram.com/achamigos_fatec',
  },
};

export const BackgroundColor: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '1%', background: '#000000', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const Posicao: Story = {
  decorators: [
    (Story) => (
      <div style={{padding: '10%', width: '95%', maxWidth: '5000px' }}>
        <Story />
      </div>
    ),
  ],
};


