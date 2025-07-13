<script setup lang="ts">
import { ref } from 'vue'

const testInputVal = ref('')

function handleClick() {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-12">
      <header>
        <h1 class="text-4xl font-bold text-gray-900">
          UI Library Playground
        </h1>
        <p class="text-gray-600 mt-2">
          Тестирование компонентов
        </p>
      </header>

      <section class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-semibold mb-4">
          Buttons
        </h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <KrButton @click="handleClick">
              Primary
            </KrButton>
            <KrButton variant="secondary">
              Secondary
            </KrButton>
            <KrButton variant="danger">
              Danger
            </KrButton>
            <KrButton variant="outline">
              Outline
            </KrButton>
          </div>

          <div class="flex gap-4">
            <KrButton size="small">
              Small
            </KrButton>
            <KrButton size="medium">
              Medium
            </KrButton>
            <KrButton size="large">
              Large
            </KrButton>
          </div>

          <div class="flex gap-4">
            <KrButton disabled>
              Disabled
            </KrButton>
          </div>
        </div>
      </section>

      <section class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-semibold mb-4">
          Input
        </h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <KrTextInput v-model="testInputVal" size="small" />
          </div>

          <div class="flex gap-4">
            <KrTextInput disabled />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
