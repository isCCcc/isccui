<template>
    <button :class="{ checked }" @click="toggle">
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

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    background-color: grey;
    border-radius: $h/2;
    position: relative;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2/2;
    transition: left 250ms;
}

button.checked {
    background-color: blue;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button:focus {
    outline: none;
}
</style>
