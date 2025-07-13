import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  vue: true,
  typescript: true,
  stylistic: {
    quotes: 'single',
    semi: false,
    indent: 2,
  },
}, {
  rules: {
    // Общие правила
    'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    // Vue правила
    'vue/no-mutating-props': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-duplicate-attributes': 'error',
    // Правило для переноса строк в объектах
    'style/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
      },
    ],

    // Правило для максимального количества атрибутов в строке
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],

    // Правило для порядка атрибутов
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],

    // Правило для первой строки в многострочных атрибутах
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],

    // Правило для закрывающих скобок в многострочных элементах
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    // Правило для отступов в HTML
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
})
