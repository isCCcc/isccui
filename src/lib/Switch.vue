<template>
    <button class="blanche-switch" :class="{ 'blanche-checked': checked }" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">
export default {
    props: {
        checked: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:checked', !props.checked)
        }

        return { toggle }
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.blanche-switch {
    height: $h;
    width: $h*2;
    border: none;
    background-color: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    z-index: 10;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background-color: white;
        border-radius: $h2/2;
        transition: left 250ms;
    }

    &.blanche-checked {
        background-color: #1890ff;

        >span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.blanche-checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
