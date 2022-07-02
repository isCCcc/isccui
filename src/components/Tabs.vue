<template>
    <h1>Tabs 示例</h1>
    <h1>示例1</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航222222222">内容二</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
export default {
    components: { Tab, Tabs },
    setup() {
        const x = ref('导航222222222');
        return { x }
    }
}
</script>
