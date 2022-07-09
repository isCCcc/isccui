<demo>Button-Base</demo>

<template>
    <Button>普通按钮</Button>
    <Button level="primary">主要按钮</Button>
    <Button level="success">成功按钮</Button>
    <Button level="warning">危险按钮</Button>
    <Button level="error">错误按钮</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue'
export default {
    components: { Button }
}
</script>