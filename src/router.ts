import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import DocFile from './components/DocFile.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocFile },
                { path: 'intro', component: Intro },
                { path: 'install', component: Install },
                { path: 'get-started', component: GetStarted },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs },
            ]
        }
    ]
})