<template>
    <div>
        <h1>Button 示例</h1><br>
    </div>

    <h2> Button 大小 </h2>
    <div>
        <Button size="big">偏大按钮</Button>
        <Button>正常按钮</Button>
        <Button size="small">偏小按钮</Button>
    </div>

    <h2> Button 形状 </h2>
    <div>
        <Button>普通按钮</Button>
        <Button round>圆边按钮</Button>
    </div>

    <h2> Button 类别 </h2>
    <div>
        <Button>普通按钮</Button>
        <Button level="primary">主要按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="warning">危险按钮</Button>
        <Button level="error">错误按钮</Button>
    </div>

    <h2> Button 禁用 </h2>
    <div>
        <Button>普通按钮</Button>
        <Button disabled>禁用按钮</Button>
    </div>

    <h2> Button 加载 </h2>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>

</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: { Button },
    setup() {
        const onClick = () => {
            alert("hello")
        }
        return { onClick }
    }
}
</script>

<style lang="scss">
h2 {
    margin: 10px 0 8px 0;
}
</style>
