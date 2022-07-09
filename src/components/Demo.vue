<template>
    <div class="demo ">
        <h2>{{ component.__sourceCodeTitle }}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button @click="toggle">{{ codeVisible ? '隐藏代码' : '查看代码' }}</Button>
        </div>
        <div :class="'demo-code ' + [codeVisible ? 'code-show' : 'code-hidden']">
            <pre v-html="html"></pre>
        </div>
    </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import "prismjs/themes/prism.css";
import { computed, ref } from 'vue';
import Button from '../lib/Button.vue'

export default {
    components: { Button },
    props: {
        component: { type: Object }
    },
    setup(props) {
        console.log(props.component.__parsed)
        const codeVisible = ref(false)
        const toggle = () => { codeVisible.value = !codeVisible.value }
        const html = computed(() => { return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html') })
        return { Prism, toggle, codeVisible, html }
    }
}

</script>

<style lang="scss" scoped>
$border-color: #333;

.demo {
    border: 1px solid $border-color;
    border-radius: 5px;
    margin: 16px 0 32px;
    max-width: 500px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 20px 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px solid $border-color;

        >:first-child {
            animation: none;
        }
    }

    &-code {
        border-top: 1px solid $border-color;
        overflow: auto;

        >pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0;
            padding: 24px;
        }
    }

    .code-hidden {
        transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
        max-height: 0;
        border: none;
    }

    .code-show {
        transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
        max-height: 800px;
    }
}
</style>
