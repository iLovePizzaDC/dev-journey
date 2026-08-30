# Dev Journey

Personal portfolio. Career timeline, projects with live GitHub push data, and technologies ordered by when they were learned.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Heroicons · Vitest · Testing Library

## Project structure

```
src/
  app/                 # Shell + global CSS
  features/<name>/
    components/        # atoms | molecules | organisms
    hooks/ types/ constants/ utils/   # as needed
  shared/
    api/               # GitHub client
    components/        # reusable UI (atomic)
    content/           # profile, jobs, projects, techs
    constants/ hooks/ i18n/ theme/ types/ utils/
  test/                # Vitest setup + render helpers
  main.tsx
```

Imports use the `@/` alias (`src/`).

### Conventions

| Rule               | Detail                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Context / Provider | Split files (`FooContext.tsx` + `FooProvider.tsx`). Value types live in the Context file; `IFooProvider` in the Provider file. |
| Props              | `interface IButton` (etc.) in the same `.tsx` as the component, no `Props` suffix.                                             |
| Everything else    | `type` for domain/helpers. Constants & utils → `shared/*` if shared, else `features/<name>/{constants,utils,types}/`.          |
| Tests              | Colocated `*.test.ts(x)`: unit for pure logic, Testing Library for UI.                                                         |

## Setup

```bash
npm install
npm run dev
```

| Script           |                              |
| ---------------- | ---------------------------- |
| `npm run dev`    | Dev server                   |
| `npm run build`  | Typecheck + production build |
| `npm test`       | Vitest                       |
| `npm run lint`   | ESLint                       |
| `npm run format` | Prettier                     |
