<template>
    <div class="first-title">
        <h1>Tabs 标签</h1>
        <p>用于标记和选择。</p>
        <br>

        <section class="second-title">
            <h3> 基础用法</h3>
            <p>可通过控制 <span class="fontSty"> selectedTitle </span>属性的值，来<span class="fontSty"> 指定初始选中 </span>的导航栏</p>
        </section>
        <Demo :component="TabNormal" />

        <h3> 支持 Disabled</h3>
        <p>在 Tab 组件中添加 <span class="fontSty"> disabled </span> 属性，以此来控制 <span class="fontSty"> 该 Tab 不被选中 </span></p>
        <Demo :component="TabDisabled" />
    </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import TabDisabled from './TabsModules/TabDisabled.vue';
import TabNormal from './TabsModules/TabNormal.vue';
export default {
    components: { Demo },
    setup() {
        return { TabNormal, TabDisabled }
    }
}
</script>
