<template>
    <div>
        <Switch v-model:checked="bool" />
        <!-- <Switch :checked="checked" @update:checked="checked = $event" /> -->
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../lib/Switch.vue";
export default {
    components: { Switch },
    setup() {
        const bool = ref(false);
        return { bool }
    }
}
</script>
