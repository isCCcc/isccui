<template>
    <div>
        <h1>Switch 组件示例</h1>
        <Demo :component="SwitchNormal" />
        <Demo :component="SwitchDisabled" />
    </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import SwitchNormal from './SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from './SwitchDemo/SwitchDisabled.vue'
export default {
    components: { Demo },
    setup() {

        return { SwitchNormal, SwitchDisabled }
    }
}
</script>

