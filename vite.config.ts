import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("src", import.meta.url)),
        }
    }
})
