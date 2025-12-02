// Main entry point for personal-ledger-react
// This file bootstraps the React application, imports necessary modules,
// sets up providers for data fetching and routing, and renders the app to the DOM.
// It serves as the starting point for the client-side application.

import { StrictMode } from "react";
// Import createRoot for React 18+ concurrent rendering
import { createRoot } from "react-dom/client";
// Import the main App component
import { App } from "@/App";

// Create the root React element and render the app
// Uses StrictMode for development checks and App as the root component
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
