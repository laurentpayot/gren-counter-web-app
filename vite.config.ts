import { defineConfig } from 'vite'
import grenPlugin from 'vite-plugin-gren'

export default defineConfig({
    // clearScreen: false,
    server: {
        port: 5000,
        strictPort: true,
    },
    root: './src',
    build: {
        outDir: `../dist`, // relative to viteConfig.root directory
        emptyOutDir: true,
        target: 'es2022'
    },
    plugins: [
        grenPlugin()
    ]
})
