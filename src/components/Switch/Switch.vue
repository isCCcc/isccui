<template>
    <div>
        <h1>Switch 组件示例</h1>
        <div class="demo ">
            <h2>常规用法</h2>
            <div class="demo-component">
                <component :is="SwitchNormal" />
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code code-show">
                <pre v-html="Prism.highlight(SwitchNormal.__sourceCode, Prism.languages.html, 'html')"></pre>
            </div>
        </div>
        <div class="demo">
            <h2>支持 disabled</h2>
            <div class="demo-component">
                <component :is="SwitchDisabled" />
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre v-html="Prism.highlight(SwitchDisabled.__sourceCode, Prism.languages.html, 'html')"></pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import SwitchNormal from "./SwitchDemo/SwitchNormal.vue";
import SwitchDisabled from "./SwitchDemo/SwitchDisabled.vue";
import Button from "../../lib/Button.vue";
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default {
    components: { Button },
    setup() {
        const bool = ref(false);
        return { bool, SwitchNormal, SwitchDisabled, Prism }
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
