# isccui
Vue3 造轮子

## 介绍
Blanche-UI 是一个简洁的前端 UI 框架,基于 vue3.0 的开源 UI 组件库, 使用`vite` `vue3.0` `typescript`搭建, 由[blanche](https://github.com/isCCcc)开发, 如果你不满框架原生样式, 不必担心类名命名的问题，覆盖样式也是可以的, 同时 blancheUI 还支持`移动端`显示。

## 安装

打开终端运行下列命令：

```
npm install blanche-ui
```

或

```
yarn add blanche-ui
```

## 下载与使用

请先[安装](#/doc/install)本组件库。
<br>
<br>
然后在你的代码中写入下面的代码
<br>
```
import {Button, Tabs, Switch, Dialog} from "blanche-ui"
```
就可以使用我提供的组件了。
<br>
<br>
## Vue 单文件组件
代码示例：

```
<template>
  <Tabs v-model:selected="tabSelected">
    <Tab title="tab1">content-one</Tab>
    <Tab title="tab2">content-two</Tab>
    <Tab title="tab3">content-three</Tab>
  </Tabs>
</template>

<script>
import { Tabs, Tab } from 'blanche-ui';
import 'blanche-ui/dist/lib/blanche.css'
export default {
  name: 'App',
  components: { Tabs, Tab },
  data() {
    return { tabSelected: 'tab2' }
  }
}
</script>
```

## 展示
首页：
![image](https://user-images.githubusercontent.com/76574442/179159720-bb4de52d-0ef9-42b2-a33f-be6115e82fe5.png)

开始页：
![image](https://user-images.githubusercontent.com/76574442/179159835-0d8d2a7e-cede-4a2a-ab41-93f0ae48f32c.png)

Tabs：
![image](https://user-images.githubusercontent.com/76574442/179159941-1deb3344-2e39-4977-9ab7-169b397f6aa6.png)

更多预览可前往我的官网：https://iscccc.github.io/blanche-ui-website/
