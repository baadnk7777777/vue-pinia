import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './assets/main.css'
import { Vue3Lottie } from 'vue3-lottie'
const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(createPinia())
app.use(Vue3Lottie, {name: 'LottieAnimation'});
app.use(router)

app.mount('#app')
