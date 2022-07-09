<demo>常规用法</demo>
<template>
    <Switch v-model:checked="bool" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'
export default {
    components: { Switch },
    setup() {
        const bool = ref(false);
        return { bool }
    }
}
</script>