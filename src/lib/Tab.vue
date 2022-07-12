<template>
    <div :disabled="disabled">
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    }

}
</script>