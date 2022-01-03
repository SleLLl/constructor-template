import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, loadEnv } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        webp: {
          quality: 75,
        },
        mozjpeg: {
          quality: 65,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        },
      }),
      reactRefresh(),
    ],
  };
});
