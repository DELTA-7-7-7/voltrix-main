import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify'

export default defineConfig({
  output: 'server',
  adapter: netlify({ devFeatures: { edgeFunctions: false } }),
  integrations: [react()],
  security: { checkOrigin: false },
})