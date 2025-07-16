// // src/global.d.ts
// import type { DefineComponent } from 'vue'
// import type {
//   IButtonProps,
//   ITextInputEmits,
//   ITextInputProps,
// } from './components'

// export type KrButtonInstance = DefineComponent<IButtonProps, object, object, object, object, object, object, { click: [event: MouseEvent] }>
// export type KrTextInputInstance = DefineComponent<ITextInputProps, object, object, object, object, object, ITextInputEmits>

// declare module 'vue' {
//   export interface GlobalComponents {
//     KrButton: KrButtonInstance
//     KrTextInput: KrTextInputInstance // ✅ без опечатки
//   }
// }

// export interface ComponentsTypes {
//   KrButton: KrButtonInstance
//   KrTextInput: KrTextInputInstance
// }
