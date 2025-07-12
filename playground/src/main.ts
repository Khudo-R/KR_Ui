import { createApp } from 'vue'

import { Button } from '../../src/components'
import App from './App.vue'

import 'uno.css'

const app = createApp(App)

app.component('KrButton', Button)
app.mount('#app')
