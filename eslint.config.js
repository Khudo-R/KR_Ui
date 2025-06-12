import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lint',
  vue: {
    overrides: {
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    'vue/no-mutating-props': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-duplicate-attributes': 'error',
  },
  stylistic: {
    quotes: 'single',
    semi: false,
    indent: 2,
  },
})
