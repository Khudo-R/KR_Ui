import KrUiPlugin from 'kr-ui'

import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'

const app = createApp(App)

app.use(KrUiPlugin)

app.mount('#app')
