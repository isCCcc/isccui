<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="fn1" :cancel="fn2">
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
            <div>内容一</div>
            <div>内容二</div>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">一键开启</Button>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import { ref } from 'vue';
import { openDialog } from '../../lib/openDialog'
export default {
    components: { Dialog, Button },
    setup() {
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
        // 一句话打开Dialog
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '你好呀！',
                ok() {
                    // 返回值不为 false 即可往下走，具体逻辑可移步至 lib/Dialog 设置
                },
                cancel() {
                    // 点击即可往下走，具体逻辑可移步至 lib/Dialog 设置
                }
            });
        }
        return { x, toggle, fn1, fn2, showDialog }
    }
}
</script>
