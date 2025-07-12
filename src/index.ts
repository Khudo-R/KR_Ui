import type { App, Plugin } from 'vue'
import { Button } from './components'
import './styles/index.css'

export { Button }

export function install(app: App) {
  app.component('KrButton', Button)
}

const plugin: Plugin = {
  install,
}

export default plugin
export const KrUILib = plugin
