import { defineConfig } from 'vite'
import yaml from '@rollup/plugin-yaml'
import { sapThemeAssets } from '@jungsap/slidev-theme-sap/vite-plugin'

// yaml() lets us import event.yaml / presenters via the theme's data resolvers.
// sapThemeAssets() makes the theme's bundled public/ (SAP logo, anvil
// decorations, presenter photos) available to this deck.
// ui5- custom elements are registered so Vue's template compiler doesn't
// warn about them.
export default defineConfig({
  plugins: [yaml(), sapThemeAssets()],
  // @ts-expect-error - slidev-specific extension key not in Vite's types
  slidev: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('ui5-')
        }
      }
    }
  }
})
