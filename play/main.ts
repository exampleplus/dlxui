import { createApp } from 'vue'
import App from './app.vue'
import dlxui from '@dlxui/components'
const app = createApp(App)
app.use(dlxui)

app.mount('#app')
