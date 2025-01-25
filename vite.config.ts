import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br', // URL da API original
        changeOrigin: true, // Altera a origem da requisição para a do servidor alvo
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' do início da URL
        secure: false, // Define para false caso a API use HTTPS autoassinado
      },
    },
  },
})
