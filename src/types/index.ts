export * from '../components/Button/types'
export * from '../components/InputText/types'

export * from './components'

export type InstallFunction = (app: import('vue').App) => void

export type Size = 'small' | 'normal' | 'large'
export type Variant = 'primary' | 'secondary' | 'outlined' | 'warning' | 'filled' | 'danger'
