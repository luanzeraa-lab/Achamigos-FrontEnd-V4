import { background } from 'storybook/theming';
import Relatorio from './Relatorio';

export default {
  title: 'Components/Relatorio',
  component: Relatorio,
  tags: ['autodocs'],
};

export const Default = {
  args: {

    dados: [
      {
        _id: '1',
        animalNome: 'Rex',
        vacinaNome: 'Antirrábica',
        dataAplicacao: '15/03/2026',
      },
      {
        _id: '2',
        animalNome: 'Luna',
        vacinaNome: 'V10 (Múltipla Canina)',
        dataAplicacao: '20/04/2026',
      },
      {
        _id: '3',
        animalNome: 'Mingau',
        vacinaNome: 'Quádrupla Felina (V4)',
        dataAplicacao: '10/05/2026',
      },
    ],
  },

  decorators:[],
};

export const SemDados = {
  args: {
    dados: [],
  },
};

export const DarkMode = {
    args: {
        dados: [
            {
            _id: '1',
            animalNome: 'Rex',
            vacinaNome: 'Antirrábica',
            dataAplicacao: '15/03/2026',
            },
            {
            _id: '2',
            animalNome: 'Luna',
            vacinaNome: 'V10 (Múltipla Canina)',
            dataAplicacao: '20/04/2026',
            },
            {
                _id: '3',
                animalNome: 'Mingau',
                vacinaNome: 'Quádrupla Felina (V4)',
                dataAplicacao: '10/05/2026',
            },
        ],
    },
    
    decorators:[
        (Story) => (
            <div style={{
                paddingTop: '5%',
                paddingLeft: '10%',
                paddingRight: '5%',
                paddingBlockEnd: '100%',
                background: '#000000',
                width: '100%',
                maxWidth: '5000px',
                color:'#ffffff' }}
                >
            <Story />
            </div>
        ),
    ],
}
