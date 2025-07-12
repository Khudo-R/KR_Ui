<script setup lang="ts">
import type { IButtonProps } from './types'
import { computed } from 'vue'

const {
  size = 'medium',
  disabled = false,
  variant = 'primary',
} = defineProps<IButtonProps>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center font-medium rounded-md transition-colors',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    'px-3 py-1.5 text-sm': size === 'small',
    'px-4 py-2 text-base': size === 'medium',
    'px-6 py-3 text-lg': size === 'large',
  },
  {
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500': variant === 'primary',
    'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500': variant === 'secondary',
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': variant === 'danger',
    'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50': variant === 'outline',
  },
  {
    'opacity-50 cursor-not-allowed pointer-events-none': disabled,
  },
])

function handleClick(event: MouseEvent) {
  if (!disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
