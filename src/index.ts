import type {
  App,
  Plugin,
} from 'vue'
import KrButton from './components/Button/Button.vue'
import KrTextInput from './components/InputText/InputText.vue'

const components = {
  KrButton,
  KrTextInput,
}

export default {
  install: (app: App) => {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
} satisfies Plugin
