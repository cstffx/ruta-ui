// noinspection JSUnusedGlobalSymbols

import {defineConfig} from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/ruta": "http://localhost:8080"
        }
    },
})