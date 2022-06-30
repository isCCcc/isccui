<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="fn1" :cancel="fn2">
        <div>内容一</div>
        <div>内容二</div>
    </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Dialog, Button },
    setup(props) {
        const x = ref(false);
        // 切换对话框
        const toggle = () => {
            x.value = !x.value;
        }
        // 对ok按钮进行校验
        const fn1 = () => {
            // ......
            return true;
        }
        // 对cancel按钮进行校验
        const fn2 = () => {
            return true;
        }
        return { x, toggle, fn1, fn2 }
    }
}
</script>
