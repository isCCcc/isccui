import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch/Switch.vue'
import Button from './components/Button/Button.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Tabs from './components/Tabs/Tabs.vue'

import { h } from 'vue'

import Markdown from "./components/Markdown.vue"
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md(intro) },
                { path: 'install', component: md(install) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs },
            ]
        }
    ]
})