<script setup lang="ts">
import type { ITextInputEmits, ITextInputProps } from './types'
import { computed } from 'vue'

const {
  modelValue = '',
  placeholder = 'Placeholder',
  disabled = false,
  size = 'normal',
  variant = 'primary',
} = defineProps<ITextInputProps>()

const emit = defineEmits<ITextInputEmits>()

const currentModelValue = computed({
  get() {
    return modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

const inputTextClasses = computed(() => [
  'inline-flex items-center justify-center font-medium rounded-md transition-colors',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    'px-2 py-1 text-sm': size === 'small',
    'px-3 py-2 text-base': size === 'normal',
    'px-4 py-3 text-lg': size === 'large',
  },
  {
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500': variant === 'primary',
  },
])
</script>

<template>
  <input
    v-model="currentModelValue"
    type="text"
    :class="inputTextClasses"
    :placeholder="placeholder"
    :disabled="disabled"
  >
</template>
