<demo>Dialog-Verify</demo>

<template>
    <Button @click="toggle">开启验证</Button>
    <Dialog v-model:visible="x" :ok="ok" :cancel="cancel">
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
        // 对ok按钮进行校验，返回值不为false即可关闭对话框
        const ok = () => {
            // ......
            return true;
        }
        // 对cancel按钮进行其他操作，任意返回值均可关闭对话框
        const cancel = () => {
            // ......
            return true;
        }

        return { x, toggle, ok, cancel }
    }
}
</script>