import { createApp } from 'vue'

import KrUi from '../../src'
import App from './App.vue'

import 'uno.css'

const app = createApp(App)

app.use(KrUi)
app.mount('#app')
