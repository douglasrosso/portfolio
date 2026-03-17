# Douglas Rosso — Portfólio

Portfólio pessoal de engenheiro de software, construído com React, TypeScript e Material UI.

## Tech Stack

| Tecnologia | Uso |
|---|---|
| [React 18](https://react.dev) | UI library |
| [TypeScript 5](https://www.typescriptlang.org) | Tipagem estática |
| [Vite 5](https://vitejs.dev) | Build tool e dev server |
| [MUI 7](https://mui.com) | Componentes de UI |
| [Framer Motion](https://www.framer.com/motion/) | Animações |

## Estrutura

```
src/
├── components/
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── FadeIn.tsx
│   ├── Footer.tsx
│   ├── glass.ts              # Tokens glass morphism + styled components
│   ├── HeroSection.tsx
│   ├── LiquidBlobs.tsx
│   ├── MonoLabel.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   ├── ScrollToTop.tsx
│   ├── Section.tsx
│   └── TechStackSection.tsx
├── pages/
│   └── Index.tsx
├── App.tsx
├── main.tsx
├── theme.ts
└── index.css
```

## Executando

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Build de produção otimizado |
| `npm run preview` | Preview local do build |
| `npm run lint` | Linting com ESLint |

## Licença

Projeto de uso privado.
