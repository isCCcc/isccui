<template>
    <div class="blanche-dialog-overlay"></div>
    <div class="blanche-dialog-wrapper">
        <div class="blanche-dialog">
            <header>
                <h1>标题</h1>
            </header>
            <hr>
            <main>
                <p>第一行字</p>
                <p>第二行字</p>
            </main>
            <hr>
            <footer>
                <Button>OK</Button>
                <Button>Cancel</Button>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: { Button },
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
        background: fade_out(#ddd, 0.3);
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
    }


}
</style>