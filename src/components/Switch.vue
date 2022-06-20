<template>
    <div>
        <Switch v-model:checked="checked" />
        <!-- <Switch :checked="checked" @update:checked="checked = $event" /> -->
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../lib/Switch.vue";
export default {
    components: { Switch },
    setup() {
        const checked = ref(false);
        return { checked }
    }
}
</script>
