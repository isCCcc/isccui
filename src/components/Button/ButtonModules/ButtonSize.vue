<demo>Button-Size</demo>

<template>
    <Button size="big">偏大按钮</Button>
    <Button>正常按钮</Button>
    <Button size="small">偏小按钮</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue'
export default {
    components: { Button }
}
</script>