import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import './style.css'
import App from './App.vue'
import 'vue3-ts-picker/dist/vue3-ts-picker.css'

import 'uno.css'// css样式库
createApp(App).use(VueClipboard).mount('#app')
