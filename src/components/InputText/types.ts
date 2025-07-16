import type { Size, Variant } from '@/types'

type ModelValue = string

export interface ITextInputProps {
  variant: Variant
  size?: Size
  modelValue?: ModelValue
  text?: string
  placeholder?: string
  disabled?: boolean
}

export interface ITextInputEmits {
  (e: 'update:modelValue', newValue: ModelValue): void
}
