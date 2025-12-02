# Copilot Instructions for personal-ledger-react

## Project Overview
This repository contains the React frontend for a personal ledger application. It communicates with a backend built using Tonic, a gRPC framework for Rust. The application is designed to be deployed as both a web app and a desktop app.

## Tech Stack
- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: TanStack Router for client-side routing
- **Data Fetching**: TanStack Query for server state management and caching
- **gRPC Client**: TypeScript client generated from protobuf files using gRPC-Web for browser compatibility
- **Desktop Deployment**: Tauri for cross-platform desktop apps
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, accessible UI
- **State Management**: React hooks and context; consider Zustand or Redux Toolkit for complex state
- **Testing**: Vitest for unit tests, React Testing Library for component tests

## Coding Standards
- **Language**: Use TypeScript for all new code to ensure type safety
- **React Best Practices**: Prefer functional components with hooks over class components
- **Naming Conventions**:
  - Variables and functions: camelCase
  - Components: PascalCase
  - Files: kebab-case for components (e.g., `ledger-entry.tsx`), camelCase for utilities
- **Code Style**: Follow ESLint and Prettier configurations (to be set up)
- **Error Handling**: Use try-catch for async operations; handle gRPC errors with status codes
- **Documentation**: Add JSDoc comments for public functions and complex logic
- **Imports**: Use absolute imports with path aliases (e.g., `@/components`)

## Architecture Guidelines
- **Folder Structure**:
  - `src/components/`: Reusable UI components
  - `src/components/ui/`: shadcn/ui base components (e.g., Button, Input)
  - `src/pages/`: Page-level components
  - `src/hooks/`: Custom React hooks
  - `src/services/`: gRPC client and API calls
  - `src/utils/`: Utility functions
  - `src/types/`: TypeScript type definitions
  - `src/assets/`: Static assets like images and icons
- **Component Design**: Keep components small, focused, and reusable. Use composition over inheritance. Leverage shadcn/ui components as building blocks for consistent UI.
- **State Management**: Use local state for component-specific data; lift state up or use context for shared state.
- **gRPC Integration**: Generate client code from `.proto` files. Use promises for unary calls and event listeners for streaming. Ensure all calls handle authentication and errors.
- **Performance**: Optimize re-renders with React.memo, useCallback, and useMemo. Lazy load components and routes.
- **Security**: Validate user inputs; avoid exposing sensitive data in client-side code.

## Development Workflow
- **Setup**: Run `pnpm install` after cloning; set up Tailwind CSS and shadcn/ui if not already configured. Use `pnpm run dev` for development
- **Building**: Use `pnpm run build` for production builds
- **Testing**: Run `pnpm test` before commits; aim for high coverage
- **Branching**: Follow Git Flow: `main` for production releases, `develop` for ongoing development, `feature/*` for new features, `release/*` for releases, `hotfix/*` for hotfixes
- **Commits**: Use conventional commits (e.g., `feat: add new component`)
- **Pull Requests**: Include descriptions, screenshots for UI changes, and link to backend changes if applicable

## Deployment
- **Web App**: Build static assets with Vite and deploy to platforms like Vercel, Netlify, or GitHub Pages. Ensure gRPC proxy (e.g., Envoy) is configured for backend communication.
- **Desktop App**: Use Electron for a Chromium-based app or Tauri for a lighter, Rust-based alternative. Package for Windows, macOS, and Linux.

## Specific Rules for This Repo
- Always integrate with the Tonic backend via gRPC; avoid REST APIs unless necessary for compatibility.
- Prioritize mobile-responsive design for web deployment.
- For desktop features, leverage native APIs (e.g., file system access) where appropriate.
- Keep the app lightweight; avoid heavy dependencies.
- When adding new features, ensure they align with the personal ledger use case: tracking income, expenses, accounts, etc.

## Additional Notes
- Refer to the backend repository for shared protobuf definitions and API contracts.
- If unsure about implementation details, consult the README or backend docs.
- Encourage modular, maintainable code to facilitate future enhancements like multi-currency support or advanced reporting.</content>
<parameter name="filePath">/home/ian/Workspaces/personal-ledger-react/.github/copilot-instructions.md
