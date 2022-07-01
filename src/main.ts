import { createApp, defineComponent } from 'vue'
import App from './App.vue'

import {
    // create naive ui
    create,
    // component
    NConfigProvider,
    NButton,
    NIcon
} from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NButton,
        NIcon
    ]
})

const app = createApp(App)

app.use(naive)

app.mount('#app')
