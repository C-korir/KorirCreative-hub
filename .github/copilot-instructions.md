## Project Overview
A personal portfolio website for Collins Korir built with **Vite + React 18 + TypeScript + Tailwind CSS + shadcn-ui**. The portfolio showcases experience, skills, projects, and collaborations through a single-page application with smooth scroll navigation.

## Architecture & Key Concepts

### Component Structure
- **Section-based layout**: Portfolio organized into semantic sections (`HeroSection`, `ExperienceSection`, `SkillsSection`, `ProjectsSection`, `CollaborationsSection`, `ContactSection`)
- **UI component library**: shadcn-ui provides accessible, composable primitives via `@radix-ui` (Accordion, Dialog, Dropdown, Tabs, etc.)
- **Shared utilities**: `src/lib/utils.ts` exports `cn()` - combines `clsx()` + `tailwind-merge` for safe className composition
- **Navigation**: Custom `NavLink` wrapper (src/components/NavLink.tsx) around React Router's NavLink with support for active/pending states

### Tech Stack Details
- **Build**: Vite with React SWC compiler for fast builds
- **Routing**: React Router 6 with single Index page route; NotFound fallback
- **Styling**: Tailwind CSS with CSS variables (HSL format) in theme, animations via `tailwindcss-animate`
- **Forms**: React Hook Form + Zod validation (setup available but minimal usage currently)
- **Animations**: Framer Motion for entrance animations and transitions
- **Icons**: Lucide React throughout
- **Charts**: Recharts for any data visualization needs
- **Toast notifications**: Sonner + custom Toaster UI component
- **State management**: React Query (TanStack Query) for server state

### Data & Styling Patterns
1. **Tailwind classes**: All styling uses utility classes; dark mode enabled via class strategy
2. **Theme colors**: HSL CSS variables (`--primary`, `--background`, etc.) defined globally, extended in `tailwind.config.ts`
3. **Motion animations**: Framer Motion `motion.*` elements use initial/animate/transition props; see `src/components/portfolio/HeroSection.tsx` for patterns
4. **Icon components**: Imported from `lucide-react` (e.g., `Github`, `Mail`, `MapPin`)

## Developer Workflow

### Core Commands
- `npm run dev` - Start Vite dev server (HMR overlay disabled)
- `npm run build` - Production build to `dist/`
- `npm run build:dev` - Development build (source maps retained)
- `npm run lint` - Run ESLint across project
- `npm test` - Run Vitest suite once
- `npm run test:watch` - Watch mode for tests
- `npm run preview` - Preview production build locally

### Important Paths
- `src/pages/Index.tsx` - Main page; imports and composes all portfolio sections
- `src/components/portfolio/` - Section components; add new sections here
- `src/components/ui/` - shadcn-ui exports; auto-generated, preserve as-is
- `src/assets/` - Static images/media
- `vite.config.ts` - Path alias configured: `@` → `./src`

## Conventions & Patterns

### Component Guidelines
1. **Functional components**: All components are React function components with TypeScript
2. **Component exports**: Named exports preferred; export at bottom or inline
3. **Props interface**: Define explicit interfaces (e.g., `NavLinkCompatProps`)
4. **forwardRef usage**: Use for components that wrap DOM or Router elements (see `src/components/NavLink.tsx` for pattern)
5. **Section structure**: Portfolio sections typically wrap content in `<section>` with responsive padding/width

### Styling Patterns
- Use `cn()` helper to merge Tailwind classes: `cn(className, condition && activeClassName)`
- Responsive breakpoints: `md:` (768px) and `lg:` (1024px) used throughout
- Always include accessibility: `text-muted-foreground` for secondary text, semantic HTML
- Animation delays via `transition={{ delay: 0.3 }}` for staggered entrance effects

### TypeScript Rules
- `noImplicitAny: false` allows implicit any (lenient for rapid development)
- `strictNullChecks: false` allows nullable assignments without explicit checks
- Type imports: Use `type` imports for types/interfaces
- JSX always requires React import (handled by SWC)

## Testing & Linting
- **Setup**: `vitest.config.ts` uses jsdom + globals enabled + setupFiles
- **DOM matchers**: Testing Library available via `@testing-library/jest-dom`
- **ESLint rules**: React hooks + refresh warnings; unused vars turned off for flexibility
- **Test pattern**: Files ending `.test.ts` or `.spec.ts` in `src/**` are discovered

## Integration Points

### External Data/APIs
- No backend integration currently visible; portfolio is static content
- React Query client initialized in `src/App.tsx` but not actively used—use for future API integration
- Contact section likely includes form submission (implement with React Hook Form + Zod)

### Package Management
- Using **bun** as package manager (lockfile: `bun.lockb`)
- All dependencies in `package.json` are locked to npm-compatible versions

## Common Tasks

### Adding a New Section
1. Create component in `src/components/portfolio/NewSection.tsx`
2. Import in `src/pages/Index.tsx` and add `<NewSection />` between appropriate sections
3. Use Framer Motion for animations; reference HeroSection for pattern
4. Apply Tailwind for styling; leverage shadcn-ui components as needed

### Updating Contact Information
- Edit social links and contact details in `src/components/portfolio/HeroSection.tsx` and `src/components/portfolio/ContactSection.tsx`
- Icons from `lucide-react`; URLs in `href` attributes

### Styling Theme Changes
- Modify CSS variables in global stylesheet or Tailwind config
- Theme colors in `tailwind.config.ts`—extend `colors` object for custom hues

## Important Notes
- **Dev server**: Runs on `::` (all interfaces) port 8080; HMR overlay disabled to avoid interference
- **Monorepo note**: KorirCreative-hub subfolder also exists but root folder is the active project
- **Asset imports**: Reference assets relative to `src/` using `@` alias (e.g., `@/assets/hero-bg.jpg`)
