import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
})
