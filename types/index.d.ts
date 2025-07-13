import type { App, Plugin } from 'vue'

// Типы пропсов
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface InputProps {
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
}

// Типы компонентов
export declare const Button: import('vue').DefineComponent<ButtonProps>
export declare const Input: import('vue').DefineComponent<InputProps>

// Composables

// Функция установки
export declare const install: (app: App,) => void

// Плагин
declare const plugin: Plugin
export default plugin
export const KrUILib: Plugin

// Глобальные компоненты
declare module 'vue' {
  interface GlobalComponents {
    KrButton: typeof Button
    KrTextInput: typeof Input
  }
}
