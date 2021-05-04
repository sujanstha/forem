import path = require('path');
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    alias: {
      '@crayons': path.resolve(__dirname, 'app/javascript/crayons'),
      '@utilities': path.resolve(__dirname, 'app/javascript/utilities'),
      '@components': path.resolve(
        __dirname,
        'app/javascript/shared/components',
      ),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  }
})
