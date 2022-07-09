<template>
    <div>
        <h1>Button 按钮</h1>
        <p>常用的操作按钮。</p>
        <br>

        <h3>基础用法</h3>
        <p>控制 Button 组件的 <span class="fontSty">level</span> 属性，以此来定义 Button 的样式。</p>
        <Demo :component="ButtonBase" />

        <h3>不同大小</h3>
        <p>控制 Button 组件的 <span class="fontSty">size</span> 属性，以此来定义 Button 的样式。</p>
        <Demo :component="ButtonSize" />

        <h3>不同形状</h3>
        <p>向 Button 组件添加 <span class="fontSty">round</span> 属性，以此来定义 Button 的样式。</p>
        <Demo :component="ButtonShape" />

        <h3>禁用状态</h3>
        <p>向 Button 组件添加 <span class="fontSty">disabled</span> 属性，以此来定义 Button 的样式。</p>
        <Demo :component="ButtonDisabled" />

        <h3>加载状态</h3>
        <p>向 Button 组件添加 <span class="fontSty">disabled</span> 属性，以此来定义 Button 的样式。</p>
        <Demo :component="ButtonLoading" />
    </div>

</template>

<script lang="ts">
import Demo from '../Demo.vue'
import ButtonSize from './ButtonModules/ButtonSize.vue'
import ButtonShape from './ButtonModules/ButtonShape.vue'
import ButtonBase from './ButtonModules/ButtonBase.vue'
import ButtonLoading from './ButtonModules/ButtonLoading.vue'
import ButtonDisabled from './ButtonModules/ButtonDisabled.vue'
export default {
    components: { Demo },
    setup() {
        return { ButtonSize, ButtonShape, ButtonBase, ButtonDisabled, ButtonLoading }
    }
}
</script>

<style lang="scss">
h1,
h3 {
    padding-bottom: 10px 0;
    color: #1f2f3d;
}



p {
    font-size: 14px;
    color: #5e6d82;
}

.fontSty {
    font-style: italic;
    font-weight: bold;
    color: #333;
}
</style>

