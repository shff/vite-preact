import preactRefresh from '@prefresh/vite';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import compression from 'vite-plugin-compression';

const config: UserConfig = {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [preactRefresh(), compression({ algorithm: 'brotliCompress' })],
  resolve: {
    alias: [{ find: '@', replacement: resolve('src') }],
  },
};

export default config;
