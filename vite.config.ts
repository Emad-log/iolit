import { defineConfig } from "vite";

// The site is plain static HTML in / and /public. Vite just copies public/
// into dist/ at build time. There is no framework bundle.
export default defineConfig({});
