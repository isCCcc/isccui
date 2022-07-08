<demo>
支持 disabled
</demo>
<template>
    <div>
        <Switch v-model:checked="bool" disabled />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../lib/Switch.vue'
export default {
    components: { Switch },
    setup() {
        const bool = ref(false)
        return { bool }
    }
}
</script>