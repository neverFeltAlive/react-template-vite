import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import pluginChecker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), pluginChecker({ typescript: true })],
});
