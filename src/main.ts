declare global {
    interface Window {
        TagCanvas: any;
    }
}
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@varlet/ui/es/style'
import './assets/main.css'
import './lib/tagcanvas'

const app = createApp(App)

app.use(router).use(Varlet)

app.mount('#app')
