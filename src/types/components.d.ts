import type { DefineComponent } from 'vue'
import type { IButtonProps } from '@/components'
import type { ITextInputEmits, ITextInputProps } from '@/components'

export type KrButtonInstance = DefineComponent<IButtonProps, {}, {}, {}, {}, {}, {}, { click: [event: MouseEvent] }>
export type KrTextInputInstance = DefineComponent<ITextInputProps, {}, {}, {}, {}, {}, ITextInputEmits>

declare module 'vue' {
  interface GlobalComponents {
    KrButton: KrButtonInstance
    KrTextInput: KrTextInputInstances
  }
}

export interface ComponentsTypes {
  KrButton: KrButtonInstance
  KrTextInput: KrTextInputInstance
}