# Project AI Rules & Tech Stack

## Tech Stack
- **Framework**: React 18 with TypeScript for type safety and modern UI development.
- **Build Tool**: Vite for fast development and optimized production builds.
- **Styling**: Tailwind CSS for utility-first styling and rapid UI construction.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible and customizable components.
- **Icons**: Lucide-React for a consistent and performant icon set.
- **Navigation**: React Router Dom (v6) for client-side routing.
- **State Management**: TanStack Query (React Query) for server-state management and data fetching.
- **Forms**: React Hook Form combined with Zod for schema-based validation.
- **Animations**: Custom CSS Keyframes and Tailwind-animate for interactive elements like the "Falling Petals".
- **Feedback**: Sonner and shadcn/ui Toast for user notifications.

## Development Rules

### 1. File Organization
- New components must be placed in `src/components/`.
- New pages must be placed in `src/pages/`.
- Reusable UI primitives (shadcn) stay in `src/components/ui/`.
- Always use `.tsx` for React components and `.ts` for logic files.

### 2. Styling Guidelines
- Use Tailwind CSS utility classes for all styling.
- Avoid writing raw CSS unless it's for complex animations (add these to `src/index.css`).
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.
- Follow the existing "Dark Mode" first aesthetic (Black background, Red primary accents).

### 3. Component Architecture
- Prefer functional components with hooks.
- Keep components small and focused (under 100 lines where possible).
- Use Lucide-React for all iconography to maintain consistency.
- Ensure all new components are responsive by default using Tailwind's mobile-first breakpoints.

### 4. Routing
- All routes must be defined in `src/App.tsx`.
- Use the `Link` component from `react-router-dom` for internal navigation.

### 5. Data & State
- Use TanStack Query for any API interactions or data fetching.
- Use React Hook Form for any user input forms to ensure performance and validation consistency.

### 6. Best Practices
- Never use `any` type in TypeScript; define proper interfaces or types.
- Throw errors for unexpected states; don't swallow them in silent try/catch blocks.
- Maintain the "Glow" and "Glassmorphism" design patterns established in the project.