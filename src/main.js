import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/color.scss'
import router from './router/index.js'

// font-awesomeを入れたい
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas)
// createApp.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).mount('#app')
