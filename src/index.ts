// src/index.ts
import type { App, Plugin } from 'vue'
import type { KrButtonInstance, KrTextInputInstance } from './types/components'
import { Button, TextInput } from './components'

export { Button, TextInput }

export function install(app: App): void {
  app.component('KrButton', Button)
  app.component('KrTextInput', TextInput)
}

const plugin: Plugin = {
  install,
}

export default plugin
export const KrUILib = plugin

declare module 'vue' {
  interface GlobalComponents {
    KrButton: KrButtonInstance
    KrTextInput: KrTextInputInstance
  }
}
