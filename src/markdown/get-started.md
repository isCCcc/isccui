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

<div style='display:flex;justify-content:space-between;margin:20px 0;float:left '>
<div>上一节: <a href='#/doc/install'>安装</a></div>  
</div>
<div style='display:flex;justify-content:space-between;margin:20px 0;float:right '>
<div>下一节: <a href='#/doc/switch'>Switch 组件</a></div>  
</div>