import { IEndereco } from '@/app/CadastroUsuario/IEndereco';

declare global {
  interface Window {
    getEndereco?: () => IEndereco;
  }

// Avisa ao TypeScript que arquivos .scss são válidos para importação
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
  }
}
