# Nathy, sua Bíblia IA

Assistente de estudos bíblicos alimentado por inteligência artificial (Google Gemini). Uma SPA moderna que permite conversar com a IA sobre temas bíblicos, curiosidades, personagens, textos e interpretações.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
![Material UI](https://img.shields.io/badge/MUI-5-007fff?logo=mui)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285f4?logo=google)

---

## Funcionalidades

- **Chat com IA (Nathy)** — Assistente especializada exclusivamente em estudos bíblicos
- **Múltiplos temas visuais** — Três temas: Dourado e Terroso, Vibrante e Moderno, Clássico e Terroso
- **Interface responsiva** — Layout otimizado para desktop e mobile
- **Persistência de tema** — Preferência salva em `localStorage`
- **Fallback de modelos** — Troca automática entre modelos Gemini em caso de indisponibilidade (ex.: quota)
- **Foco bíblico** — Prompts restritos a temas bíblicos; perguntas fora do escopo são redirecionadas com gentileza

---

## Estrutura do projeto

```
SuaBibliaIA/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .eslintrc.cjs
├── .gitignore
└── src/
    ├── main.tsx              # Entry point
    ├── App.tsx               # Roteador e layout
    ├── vite-env.d.ts         # Tipos Vite e variáveis de ambiente
    ├── pages/
    │   └── AIChat.tsx        # Tela principal de chat
    ├── components/
    │   └── Configuracoes.tsx # Diálogo de temas/configurações
    ├── contexts/
    │   └── ThemeContext.tsx  # Provider de temas
    ├── services/
    │   └── geminiService.ts  # Integração Google Gemini
    └── theme/
        ├── theme.ts          # Configuração base MUI
        ├── themes.ts         # Três temas disponíveis
        ├── colors.ts         # Paleta centralizada
        ├── theme.d.ts        # Extensão TypeBackground
        └── README.md         # Documentação do sistema de cores
```

---

## Tecnologias

| Categoria    | Tecnologia                       |
|-------------|-----------------------------------|
| Framework   | React 18                          |
| Linguagem   | TypeScript 5                      |
| Build       | Vite 5                            |
| UI          | Material UI (MUI) 5 + Emotion     |
| Roteamento  | React Router 6                    |
| IA          | Google Generative AI (Gemini)     |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [Chave de API do Google Gemini](https://aistudio.google.com/apikey)

---

## Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/SuaBibliaIA.git
cd SuaBibliaIA
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=sua_chave_api_aqui
```

> **Importante:** Gere sua chave no [Google AI Studio](https://aistudio.google.com/apikey) e **nunca** faça commit da chave no repositório.

### 4. Rodar o projeto

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

---

## Scripts disponíveis

| Script    | Comando                              | Descrição                          |
|-----------|--------------------------------------|------------------------------------|
| `dev`     | `vite`                               | Servidor de desenvolvimento        |
| `build`   | `tsc && vite build`                  | Compilação e build de produção     |
| `preview` | `vite preview`                       | Preview do build de produção       |
| `lint`    | `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0` | Verificação de lint no código |

---

## Tarefas sugeridas (Tasks)

- [ ] Adicionar testes unitários (ex.: Vitest)
- [ ] Implementar CI/CD (GitHub Actions) para build e deploy
- [ ] Criar `.env.example` com `VITE_GEMINI_API_KEY=` para documentar variáveis
- [ ] Remover ou utilizar dependências não usadas (`@supabase/supabase-js`, `lottie-react`)
- [ ] Adicionar PWA para uso offline
- [ ] Implementar persistência de histórico de conversas (ex.: Supabase)
- [ ] Incluir tela de onboarding para novos usuários

---

## Licença

Este projeto é privado. Verifique os arquivos de licença para mais detalhes.

---

## Contribuição

Contribuições são bem-vindas. Sinta-se à vontade para abrir issues e pull requests.
# bibliaia
