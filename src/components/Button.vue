<template>
    <div> Button 示例</div>
    <div>
        <Button>hello</Button>
        <Button theme="button">hello</Button>
        <Button theme="link">hello</Button>
        <Button theme="text">hello</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: { Button },
    setup() {
        const onClick = () => {
            alert("hello")
        }
        return { onClick }
    }
}
</script>
