## 下载与使用

## 引入 `blanche-ui`

#### 完整引入

```
    import 'blanche-ui/dist/lib/blanche.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { blancheUI } from 'blanche-ui'

    createApp(App)
      .use(blancheUI)
      .mount('#app')
```

> 以上代码便完成了 blanche-ui 的引入。需要注意的是，样式文件需要单独引入。

<br>

#### 按需引入

> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.ts 中写入以下内容：

```
    import 'blanche-ui/dist/lib/blanche.css'
    import { createApp } from 'vue'
    import { Button } from 'blanche-ui'
    import App from './App.vue'

    createApp(App).use(Button).mount('#app')
```

<br>

> 完整组件列表和引入方式

```
    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        Tabs,
    } from 'blanche-ui'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('Tabs',Tabs)
```

<div style='display:flex;justify-content:space-between;margin:20px 0;float:left '>
<div>上一节: <a href='#/doc/install'>安装</a></div>  
</div>
<div style='display:flex;justify-content:space-between;margin:20px 0;float:right '>
<div>下一节: <a href='#/doc/switch'>Switch 组件</a></div>  
</div>