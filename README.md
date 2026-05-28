

# 🐾 Achamigos - Frontend Next.js

Frontend da plataforma **Achamigos**, desenvolvido para conectar adotantes a ONGs e abrigos de proteção animal.

A aplicação permite visualizar animais disponíveis para adoção, gerenciar usuários, eventos, autenticação e integração com IA.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=black)
---

## 📚 Tecnologias

| Tecnologia | Descrição |
| --- | --- |
| Next.js | Framework React para SSR e SPA |
| React.js | Biblioteca para construção da interface |
| TypeScript | Tipagem estática |
| Tailwind CSS | Estilização moderna |
| React-Bootstrap | Componentes visuais |
| Axios | Requisições HTTP |
| SCSS Modules | Estilização modular |
| AOS | Animações |
| JWT Decode | Manipulação de tokens |
| React Toastify | Alertas e notificações |

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── app/                  # Páginas da aplicação (App Router)
│   ├── components/           # Componentes reutilizáveis
│   ├── services/             # Serviços e integração com APIs
│   ├── interfaces/           # Interfaces TypeScript
│   ├── styles/               # Estilos globais
│   ├── hooks/                # Hooks customizados
│   └── utils/                # Funções auxiliares
├── public/                   # Arquivos estáticos
├── .env.local                # Variáveis de ambiente
├── next.config.ts            # Configuração do Next.js
├── tsconfig.json             # Configuração do TypeScript
└── package.json
```

---

## 🚀 Ambientes de Deploy

| Ambiente | Plataforma | URL |
|-----------|-----------|-----|
| Homologação | Render | [Acessar](https://achamigos-backend-latest.onrender.com) |
| Produção | Render | [Acessar](https://achamigos-backend-latest.onrender.com) |
| Produção | Heroku | [Acessar](https://achamigos-backend-prod-f16416b748da.herokuapp.com/) |

## 🐳 Docker Hub

Imagem disponível em:

[Acessar](hub.docker.com/r/lucas03almeida/front-end_achamigos)

Última versão:

```bash
docker pull lucas03almeida/front-end_achamigos:latest
```

## ⚙️ Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/luanzeraa-lab/Achamigos-FrontEnd-V4
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NEXT_PUBLIC_API_KEY=sua_api_key
```

---

## 🚀 Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Executa a aplicação em produção |

---

## 🐶 Funcionalidades

### Animais

* ✅ Listagem de animais
* ✅ Cadastro de animais
* ✅ Edição e remoção
* ✅ Upload de imagens
* ✅ Busca e filtros

### Usuários

* ✅ Cadastro de usuários
* ✅ Login e autenticação
* ✅ Perfil de usuário
* ✅ Gerenciamento de contas

### Eventos

* ✅ Cadastro de eventos
* ✅ Gerenciamento de eventos
* ✅ Listagem de eventos

### Inteligência Artificial

* ✅ Integração com Gemini AI
* ✅ Recomendação da melhor alternativa pra adoção

---

## 🔗 Integração com Backend

O frontend consome a API principal do Achamigos:

```text
http://localhost:3002
```

Além de integração com:

* Microsserviços
* API de autenticação
* Endpoint de IA Gemini

---

## 📡 Exemplo de Requisição

```typescript
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
})

export default api
```

---

## 🖼️ Upload de Imagens

O upload de imagens da plataforma é realizado utilizando o serviço de armazenamento em nuvem da :contentReference[oaicite:0]{index=0}, permitindo persistência e gerenciamento eficiente das imagens dos animais.

As imagens são enviadas para a API e armazenadas no Cloudinary, retornando uma URL pública utilizada pela aplicação.

### Exemplo de envio:

```typescript
const animalData = {
  nome,
  especie,
  idade,
  imagem: imagemUrl
}

await axios.post('/api/animais', animalData)

---

## 📱 Responsividade

A aplicação foi desenvolvida para funcionar em:

* 💻 Desktop
* 📱 Smartphones
* 📲 Tablets

---

## 🎨 UI/UX

O projeto utiliza:

* Tailwind CSS
* React-Bootstrap
* Componentização reutilizável
* Layout responsivo
* Animações com AOS

---

## 🐳 Docker

### Criar imagem Docker

```bash
docker build -t frontend-app .
```

### Rodar container

```bash
docker run -d -p 3000:3000 --name frontend-container frontend-app
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## 🌐 Deploy

O frontend pode ser hospedado em:

* Render
* Vercel
* Netlify
* Fly.io

---

## 🤖 Consumo da IA Gemini

O frontend não acessa diretamente a API do Gemini.

Toda comunicação ocorre através do backend:

```http
POST `/api/gerarTexto`
```

Isso garante maior segurança e proteção da chave privada da IA.

---

## 🛡️ Segurança

* ✅ Não expor chaves privadas no frontend
* ✅ Uso de variáveis `NEXT_PUBLIC_*`
* ✅ Consumo seguro da API
* ✅ Integração autenticada via API Key

---

---

## 🚧 Melhorias Futuras

* 💬 Chat em tempo real
* ❤️ Sistema de favoritos
* 📋 Sistema de adoção
* 🛠️ Painel administrativo
* 🔔 Notificações em tempo real
* 📊 Dashboard analítico

---

## 👨‍💻 Desenvolvido por

Projeto acadêmico desenvolvido para conectar pessoas e animais através da adoção responsável.