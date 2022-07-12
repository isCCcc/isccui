<demo>Dialog-ts</demo>

<template>
    <Button @click="showDialog">一键开启</Button>
</template>
<script lang="ts">
import Button from '../../../lib/Button.vue';
import { openDialog } from '../../../lib/openDialog';
export default {
    components: { Button },
    setup() {
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

        return { showDialog }
    }
}
</script>