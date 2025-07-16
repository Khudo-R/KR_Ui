import type { App, Plugin } from 'vue'

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

export type KrButtonInstance = DefineComponent<IButtonProps, object, object, object, object, object, object, { click: [event: MouseEvent] }>
export type KrTextInputInstance = DefineComponent<ITextInputProps, object, object, object, object, object, ITextInputEmits>
export declare const install: (app: App,) => void

declare const plugin: Plugin

declare module 'vue' {
  export interface GlobalComponents {
    KrButton: KrButtonInstance
    KrTextInput: KrTextInputInstance
  }
}
