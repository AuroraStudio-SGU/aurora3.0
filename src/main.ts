import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {router} from "./router.ts";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(router)
    .use(pinia)
    .mount('#app')

