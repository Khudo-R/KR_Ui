declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, unknown>
  export default component
}

// Импорт типов из библиотеки
declare module 'vue' {
  interface GlobalComponents {
    KrButton: typeof import('../../src/components/Button.vue').default
    KrTextInput: typeof import('../../src/components/TextInput.vue').default
  }
}
