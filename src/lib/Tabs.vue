<template>
    <div class="blanche-tabs">
        <div class="blanche-tabs-nav">
            <div class="blanche-tabs-nav-item selected" v-for="(t, index) in titles" :key="index">{{ t }}</div>
        </div>
        <div class="blanche-tabs-content">
            <component class="blanche-tabs-content-item" v-for="(c, index) in defaults" :key="index" :is="c">
            </component>
        </div>
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error("Tabs 的子标签必须是 Tab")
            }
        })
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        console.log(titles)
        return { defaults, titles };
    },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.blanche-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px;
            margin: 0 8px;
            cursor: pointer;

            &.disabled {
                color: #ccc;
                cursor: not-allowed;
            }

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            transition: all 0.25s cubic-bezier(1, 1.67, 0.21, 0.84);
        }
    }

    &-content {
        padding: 20px 8px;
    }

    @keyframes blanche-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes button-hover {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(-3px);
        }
    }
}
</style>