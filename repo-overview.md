# Zo Space – Repo Overview

Zo Spaces are web applications that users build for themselves with the help of AI. Zo Spaces can become anything that the user needs, including interactive webpages or complete CRUD driven applets or virtually anything else. All Zo Spaces are intended to run locally on a single machine, and the web app will be accessible publicly through a URL.

A Zo Space derives from this base repo that includes many starter pieces.

This repository is a **monorepo** that combines a modern **React (Vite)** front-end with a lightweight **FastAPI** back-end. It is intentionally minimal to start, but is designed to grow with a user's needs—add pages, API routes, background jobs, whatever a user demands of their Zo Space.  

Use this document as a reference for the project structure, conventions, and common tasks.

---

## 1. Stack at a Glance

| Layer     | Technology                                          | Purpose                                                                  |
|-----------|-----------------------------------------------------|--------------------------------------------------------------------------|
| Front-end | Vite 7 · React 19 · TypeScript                      | Fast dev server, modern React, type safety                               |
| UI        | Tailwind 4 · Radix UI primitives · shadcn/ui        | Rapidly build accessible, theme-able interfaces                          |
| Back-end  | FastAPI 0.116 · Python 3.12                         | For when we need to back the web page with a running service or database |
| Tooling   | ESLint · TypeScript strict mode · uv (Astral) · npm | Code quality, dependency management                                      |

---

## 2. Directory Layout

```
├── src/               # React application (Vite)
│   ├── assets/        # Static images & media
│   ├── components/    # Re-usable UI blocks
│   │   └── ui/        # shadcn-generated primitive wrappers
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Client-side utilities (API client etc.)
│   ├── pages/         # Route components – automatically discovered via convention
│   ├── App.tsx        # React root - uses import.meta.glob() for auto-routing
│   └── main.tsx       # Entry for Vite
├── public/            # Static assets copied verbatim to dist/
├── index.html         # HTML template consumed by Vite
├── api/               # FastAPI service
│   ├── main.py        # FastAPI application instance
│   ├── routers/       # Place additional routers / modules here
│   ├── pyproject.toml # Python metadata & deps
│   ├── uv.lock        # Locked dependency versions (managed by uv)
│   └── .venv/         # Local virtualenv created by `uv venv` (ignored by git)
└── *config files*     # Tailwind, Vite, eslint, tsconfig, etc.
```

> **Tip** Webpack paths: the alias `@` resolves to `src/`, so prefer to import via this path prefix, e.g. `import Button from "@/components/ui/button"`

---

## 3. Dependencies

• **Node.js >= 18** (dependencies managed through plain npm).

• **Python >= 3.12** plus the [uv](https://github.com/astral-sh/uv) package manager _(10× faster than pip)_. Install once:

---

### 4.2 Environment Variables

Create a `.env` file at the repo root (automatically picked up by Vite):

```dotenv
VITE_ZO_USER=alice # global ZO user name, provided by the system
```

Additional variables you add that start with `VITE_` are automatically inlined into the front-end at build time. For server-side secrets use `api/.env` (loaded with `python-dotenv`).

---

## 5. Common Tasks

### 5.1 Add a New Page

1. Create `src/pages/<name>.tsx` (convention: `pages/foo/bar.tsx` → route `/foo/bar`).
2. Export your component as the default:

```tsx
export default function MyPage() {
  return <div>Hello World</div>;
}

// Optional: mark as private (only visible in dev mode)
export const isPrivate = true;
```

Routes are automatically discovered - no need to update App.tsx!

### 5.2 Add an API Endpoint

1. Create `api/routers/<module>.py` with a FastAPI `APIRouter` if it is a new domain, otherwise reuse an existing router
2. Routers are hooked up in `api/main.py`:

```python
from api.routers import users
app.include_router(users.router, prefix="/users", tags=["users"])
```

### 5.3 Consume the API from React

Use the lightweight wrapper in `src/api/client.ts` (built atop the native Fetch API). You can use React Query for caching & revalidation:

```tsx
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/api/client";

const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: () => apiFetch("/users"),
});
```

---

## 7. Tooling Cheatsheet

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run typecheck` | TypeScript project-wide type checking                     |
| `npm run lint`      | Run ESLint over `src/`                                    |
| `uv add <pkg>`      | Add a backend dependency and lock it. (run from api/ dir) |
| `uv sync`           | Install latest dependencies from lockfile                 |

---

## 8. Conventions & Tips

• **Component Library** The `src/components/ui/` folder contains autogenerated shadcn wrappers around Radix primitives. Generate more with `npx shadcn-ui@latest add <component>`. The complete registry can be looked up online.

• **Theming** Global CSS variables live in `src/index.css`. User specified themes live in `src/user-theme.css`. These user-themes are not to be modified directly and are autogenerated from their preferences. Prefer using shadcn color aliases like `bg-primary`, `text-secondary`, `accent`, `muted` etc. for consistency.

• **Absolute Imports** Use `@/` instead of relative `../../` paths.

• **TypeScript** `tsconfig.json` is configured to help with catching errors at build time.

• **Python Settings** Keep runtime config (DB URLs, secrets) in `api/.env` and load with `from dotenv import load_dotenv`.

---

## 9. Where to Go Next?

• **Frontend**: Add more pages as user requests.

• **Backend**: Introduce a database (via SQLModel, SQLAlchemy, Prisma, etc.), background workers (RQ, Celery), or authentication (fastapi-users).