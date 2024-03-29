<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="blanche-dialog-overlay" @click="onClickOverlay"></div>
            <div class="blanche-dialog-wrapper">
                <div class="blanche-dialog">
                    <span class="blanche-dialog-close" @click="close"></span>
                    <header>
                        <slot name="title" />
                    </header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer>
                        <Button class="ok" @click="ok">OK</Button>
                        <Button class="cancel" @click="cancel">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: { Button },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        },
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', !props.visible);
        }
        const onClickOverlay = () => {
            console.log(props.closeOnClickOverlay)
            if (props.closeOnClickOverlay) { close(); }
        }
        const ok = () => {
            if (props.ok?.() !== false) { close(); }
        }
        const cancel = () => {
            context.emit('cancel');
            close();
        }
        return {
            close, onClickOverlay, ok, cancel
        }
    }

}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.blanche-dialog {
    position: relative;
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade-out(#333, 0.5);
    min-width: 18em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(#333, 0.3);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;

        >h1 {
            font-size: 1em;
        }
    }

    >main {
        min-height: 8em;
        padding: 32px 16px 16px 20px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;

        >.ok:hover,
        .ok:focus {
            animation: none;
            color: #fff;
            border: none;
            background-color: #1976d2;
        }

        >.cancel:hover,
        .cancel:focus {
            animation: none;
            color: #fff;
            border: none;
            background-color: #ffc107;
        }
    }

    &-close {
        position: absolute;
        top: 10px;
        right: 10px;
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 32px;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            width: 50%;
            top: 50%;
            left: 50%;
            background: black;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        @media (min-width: 500px) {
            &:hover {
                background-color: #f57272;

                &::before,
                &::after {
                    background-color: #fff;
                }
            }
        }
    }
}
</style>