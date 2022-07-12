<demo>Dialog-Overlay</demo>

<template>
    <Button @click="toggle">禁用遮罩层关闭 Dialog</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false">
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