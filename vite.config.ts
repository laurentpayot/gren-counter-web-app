import { defineConfig } from 'vite'
import { plugin as grenPlugin } from 'vite-plugin-gren'

export default defineConfig({
    // clearScreen: false,
    server: {
        port: 5000,
        strictPort: true,
        // fs: {
        //     // Allow serving files from one level up to the project root
        //     allow: ['..'],
        // },
    },
    root: './src',
    build: {
        outDir: `../dist`, // relative to viteConfig.root directory
        // assetsDir: '../assets', // relative to viteConfig.build.outDir directory
        emptyOutDir: true,
        target: 'es2022'
    },
    plugins: [
        grenPlugin()
    ]
})
