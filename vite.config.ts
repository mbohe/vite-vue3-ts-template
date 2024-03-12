import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [vue({ include: [/\.vue$/, /\.md$/] })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080
    },
    build: {
      rollupOptions: {
        output: {
          // 入口文件名
          entryFileNames: 'assets/[name]-[hash].js',
          // 块文件名
          chunkFileNames: 'assets/chunk-[hash].js',
          // 资源文件名 css 图片等等
          assetFileNames: 'assets/asset-[hash].[ext]'
        }
      }
    }
  }
})
