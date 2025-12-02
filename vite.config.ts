import { defineConfig } from 'vite'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url';
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path, { resolve } from "path";
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import type { Plugin } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// # Protocol Buffers Compiler Plugin
// This plugin watches for changes in .proto files and rebuilds them using the protoc compiler
function protocBuild(): Plugin {
  return {
    name: "protoc-build",
    // This hook is called when the Vite server starts
    // and is used to watch for changes in .proto files
    buildStart() {
      // Adjust if your proto files are elsewhere
      const protoDir = resolve(__dirname, "proto");
      // Specify the proto files to watch and build from
      const protoFiles = `${protoDir}/*.proto`;

      this.addWatchFile(protoFiles);
    },
    // This hook is called when a watch file changes. It checks if the changed file is a .proto file. If it is, it rebuilds the protos using the protoc compiler.
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".proto")) {
        console.log(`Proto file changed: ${file}. Rebuilding...`);

        try {
          execSync("pnpm run build:protoc", { stdio: "inherit" });
          console.log("Successfully rebuilt protos");
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        } catch (error) {
          console.error("Failed to rebuild protos:", error);
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    tailwindcss(),
    protocBuild(),
    // Tanstack Router needs to be before '@vitejs/plugin-react'
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
