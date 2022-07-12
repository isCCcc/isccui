<demo>Tabs-SelectedTitle</demo>

<template>
    <Tabs v-model:selected="selectedTitle">
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航2">内容二</Tab>
        <Tab title="导航3">内容三</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../../../lib/Tabs.vue';
import Tab from '../../../lib/Tab.vue';
import { ref } from 'vue';
export default {
    components: { Tab, Tabs },
    setup() {
        const selectedTitle = ref('导航2');
        return { selectedTitle }
    }
}
</script>
