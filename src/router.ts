// Router configuration for personal-ledger-react
// This file sets up TanStack Router for client-side routing in the React app.
// It imports the generated route tree from file-based routes and creates the router instance.
// The router handles navigation, route matching, and provides routing context to components.

import { createRouter } from "@tanstack/react-router";
// Import the generated route tree from TanStack Router Vite plugin
import { routeTree } from "./routeTree.gen";

/**
 * # Register
 *
 * Register the router instance for type safety.
 * This allows TypeScript to infer route types throughout the app.
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * # Router
 *
 * Create a new router instance using TanStack Router.
 *
 * The router instance is used to manage the application's routing and navigation.
 *
 * The createRouter function takes the Vite-generated route tree and React contexts
 * that we want to pass down through TanStack Router as arguments.
 *
 * @returns Router instance
 * @description The router manages client-side routing, navigation, and route matching.
 */
export const router = createRouter({
  // Use the Vite-generated route tree from file-based routing
  routeTree,
});
