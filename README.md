# Dev Journey — Nico Betz

Personal portfolio site: technologies ordered by when they were learned, work experience, and GitHub projects with live last-push data. Supports German/English and light/dark themes.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Heroicons
- Vitest + Testing Library
- ESLint + Prettier
- Atomic Design + feature-driven modules

## Architecture

```
src/
  app/                          # App shell + global CSS (index.css)
  features/
    hero|experience|projects|tech-timeline|about/
      components/
        atoms|molecules|organisms/
      hooks/                    # When needed
      types/                    # Feature props + domain shapes
  shared/
    api/                        # e.g. github client (+ *.types.ts)
    components/
      atoms|molecules|organisms/  # Shared UI; props interfaces live in the .tsx
    content/                    # Data only (+ small content helpers)
    constants/
    hooks/                      # Re-exports useLocale, useTheme
    i18n/
      LocaleContext.tsx         # Context + useLocale
      LocaleProvider.tsx        # Provider (separate file)
      messages.ts / messages.types.ts
    theme/
      ThemeContext.tsx
      ThemeProvider.tsx
    types/                      # Domain + shared UI types (`type` only)
    utils/                      # Helpers (+ date.types / date.constants)
  test/
```

Use the `@/` alias for **all** app imports (maps to `src/`).

### Conventions

- **Context vs Provider**: always split (`FooContext.tsx` + `FooProvider.tsx`) with matching `*.types.ts`
- **Types**: use `type` everywhere; use `interface` **only** for React props, named `IComponentProps` (e.g. `IButtonProps`)
- **Component props**: props interfaces live in the component `.tsx` file; component-only style maps are private `const`s there. Domain/shared types stay in `shared/types`, `shared/api`, Context/Provider `*.types.ts`, and feature `types/`
- **Tests**: Vitest unit tests for pure modules; Testing Library for UI components (colocated `*.test.ts(x)`)

## Getting started

```bash
npm install
npm run dev
```

Also install Heroicons if needed: `npm install @heroicons/react`

### Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Vite dev server              |
| `npm run build`        | Typecheck + production build |
| `npm test`             | Vitest once                  |
| `npm run test:watch`   | Vitest watch mode            |
| `npm run lint`         | ESLint                       |
| `npm run format`       | Prettier write               |
| `npm run format:check` | Prettier check               |
| `npm run preview`      | Preview production build     |

## Extending content

### Add a technology

Edit `src/shared/content/technologies.ts`:

```ts
{
  id: 'zod',
  name: 'Zod',
  category: 'frontend',
  acquiredYear: 2026,
  acquiredMonth: 3,
  note: { de: 'optional', en: 'optional' },
}
```

### Add a project + GitHub link

Edit `src/shared/content/projects.ts` and set `githubRepo: 'owner/repo'`. The UI loads `pushed_at` from the public GitHub API.

### Localization & theme

- UI copy: `src/shared/i18n/messages.ts`
- Content strings: `Localized<T>` objects (`{ de, en }`) in `src/shared/content/*`
- Language toggle + theme toggle in the header (both persisted in `localStorage`)

## Testing

Tests run with **Vitest**. Prefer a colocated `*.test.ts` / `*.test.tsx` next to each meaningful module.

- Unit tests (`*.test.ts`): pure logic — dates, GitHub mapping, i18n helpers, constants, content sorting
- UI tests (`*.test.tsx`): Vitest + Testing Library where React rendering matters (atoms, sections, toggles, cards)
- Providers: `LocaleProvider` / `ThemeProvider` tested via hooks

```bash
npm test
npm run test:watch
```
