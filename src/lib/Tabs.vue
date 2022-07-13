<template>
    <div class="blanche-tabs">
        <div class="blanche-tabs-nav" ref="container">
            <div class="blanche-tabs-nav-item" :class="{ selected: c.title === selected, disabled: c.disabled === '' }"
                v-for="(c, index) in CNodes" :key="index" :ref="el => { if (c.title === selected) selectedItem = el }"
                @click="select(c)">{{
                        c.title
                }}</div>
            <div class="blanche-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="blanche-tabs-content">
            <component class="blanche-tabs-content-item" :key="current.props.title" :is="current" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, ref, onMounted, watchEffect } from 'vue';
import Tab from './Tab.vue';
export default {
    props: {
        selected: { type: String }
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);
        onMounted(() => {
            watchEffect(() => {
                const { width, left: resLeft } = selectedItem.value.getBoundingClientRect()
                const { left: conLeft } = container.value.getBoundingClientRect();
                const left = resLeft - conLeft;
                indicator.value.style.width = width + 'px'; // 动态设置导航栏的宽度
                indicator.value.style.left = left + 'px';   // 动态设置导航栏的位置
            });
        });
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            // @ts-ignore
            if (tag.type.name !== Tab.name) {
                throw new Error("Tabs 的子标签必须是 Tab");
            }
        });
        const CNodes = defaults.map((tag) => {
            return tag.props;
        });
        // 返回的是defaults的一个子元素，即tab标签
        const current = computed(() => {
            return defaults.filter((tag) => {
                return tag.props.title === props.selected;
            })[0];
        })
        // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
        const select = (CNode) => {
            if (CNode.disabled === "") { return; }
            context.emit('update:selected', CNode.title);
        }
        return {
            defaults, CNodes, current, select, selectedItem, indicator, container,
        };
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