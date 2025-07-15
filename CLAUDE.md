# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a full-stack monorepo combining React frontend with FastAPI backend:

### Frontend (React + Vite)
- **Entry point**: `src/main.tsx` renders `App.tsx`
- **Routing**: Uses React Router with routes defined in `src/App.tsx` in the `ROUTES` array
- **UI Components**: shadcn/ui components in `src/components/ui/` built on Radix primitives
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **State Management**: React Query for server state, React hooks for local state
- **API Client**: Lightweight wrapper in `src/api/client.ts` using native fetch

### Backend (FastAPI)
- **Entry point**: `api/main.py` with minimal FastAPI app
- **API Base URL**: `https://${VITE_ZO_USER}.api.zo.space`
- **Routers**: Add new API modules in `api/routers/` and register in `main.py`
- **Environment**: Uses `api/.env` for server secrets, `.env` for client variables (VITE_ prefix)

### Key Patterns

1. **Path Aliases**: Use `@/` for absolute imports (maps to `src/`)
2. **Component Structure**: 
   - Pages in `src/pages/` named as `*-page.tsx`
   - Reusable components in `src/components/`
   - UI primitives in `src/components/ui/`
3. **Routing**: Add new routes to `ROUTES` array in `src/App.tsx`
4. **API Integration**: Use `apiFetch` from `src/api/client.ts` with React Query
5. **Theming**: Global CSS variables in `src/index.css`, user themes in `src/user-theme.css`

## Development Workflow

1. **Adding Pages**: Create in `src/pages/` and register in `src/App.tsx` ROUTES array
2. **Adding API Routes**: Create router in `api/routers/` and register in `api/main.py`
3. **Adding Components**: Use shadcn/ui generator: `npx shadcn-ui@latest add <component>`
4. **Environment Variables**: 
   - Frontend: Add to `.env` with `VITE_` prefix
   - Backend: Add to `api/.env`

## TypeScript Configuration

- Lenient settings: `noImplicitAny: false`, `strictNullChecks: false`
- Path mapping: `@/*` resolves to `src/*`
- ESLint configured with React hooks rules, `@typescript-eslint/no-unused-vars` disabled

## Key Dependencies

- **Frontend**: React 19, Vite 7, TypeScript, Tailwind 4, Radix UI, React Query, React Router
- **Backend**: FastAPI, Python 3.12, uv package manager
- **UI**: shadcn/ui components, Lucide React icons

## Special Features

- `RouteChangeNotifier` component for tracking navigation
- Theme switching with `next-themes`
- Sonner for toast notifications
- Form handling with React Hook Form + Zod validation