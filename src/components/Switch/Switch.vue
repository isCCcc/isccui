<template>
    <div>
        <h1>Switch 开关</h1>
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
        <br>

        <h3>基础用法</h3>
        <p>使用 v-model 绑定一个 <span class="fontSty">Boolean</span> 类型的变量到 Switch 组件。</p>
        <Demo :component="SwitchNormal" />

        <h3>支持 disabled 属性</h3>
        <p>在 Switch 组件中添加 <span class="fontSty">disabled</span> 属性，以此来禁用 Switch 组件。</p>
        <Demo :component="SwitchDisabled" />
    </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import SwitchNormal from './SwitchModules/SwitchNormal.vue'
import SwitchDisabled from './SwitchModules/SwitchDisabled.vue'
export default {
    components: { Demo },
    setup() {
        return { SwitchNormal, SwitchDisabled }
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

