import type { IButtonProps } from './Button/types'
import type { ITextInputEmits, ITextInputProps } from './InputText/types'

import KrButton from './Button/Button.vue'
import KrTextInput from './InputText/InputText.vue'

export type {
  IButtonProps,
  ITextInputEmits,
  ITextInputProps,
}

export const components = {
  KrButton,
  KrTextInput,
}

export {
  KrButton,
  KrTextInput,
}
