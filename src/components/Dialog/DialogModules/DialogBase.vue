<demo>Dialog-Base</demo>

<template>
    <Button @click="toggle">Dialog</Button>
    <Dialog v-model:visible="x">
        <template v-slot:title>
            <strong>标题</strong>
        </template>
        <template v-slot:content>
            <div>内容一</div>
            <div>内容二</div>
        </template>
    </Dialog>
</template>
<script lang="ts">
import Dialog from '../../../lib/Dialog.vue';
import Button from '../../../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Dialog, Button },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        }
        return { x, toggle }
    }
}
</script>