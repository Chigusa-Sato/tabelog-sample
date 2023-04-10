import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/color.scss'
import router from './router/index.js'

// font-awesomeを入れたい
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faLocationDot)
library.add(faArrowUpRightFromSquare)
library.add(faBookmark)

let app = createApp(App)

app.component('fa', FontAwesomeIcon)
app.use(router).mount('#app')
