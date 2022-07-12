<template>
    <div class="layout">
        <Topnav class="nav" :toggleAsideVisible="true" />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 开关</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 对话框</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 标签</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible') // get

        return { asideVisible }
    }
}
</script>

<style lang="scss" scoped>
$lightbgc: #fff9f9;
$deepbgc: #c67085;
$text: #6f2e6a;

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-left: 10px;

    >.nav {
        flex-shrink: 0; //高度变化时不收缩
    }

    >.content {
        flex-grow: 1; //高度变化时占据剩余空间
        padding-top: 75px;
        padding-left: 153px;

        @media (max-width: 500px) {
            padding-top: 52px;
            padding-left: 0;
        }
    }
}

.content {
    display: flex;
    padding-top: 60px;
    padding-left: 285px;

    main {
        height: 100vh;
        overflow: auto;
        flex-grow: 1;
        padding: 60px;
    }

    @media (max-width: 500px) {
        padding-left: 0;

        main {
            height: 80vh;
            overflow: auto;
            flex-grow: 1; //高度变化时,占据剩余空间
            padding: 32px;
        }
    }
}

aside {
    background: rgb(245, 245, 245);
    box-shadow: 10px 0 5px rgba(#333, 0.1);
    width: 200px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 75px;
    height: 100%;

    >h2 {
        margin: 4px 8px;
        padding-left: 8px;
    }

    >ol {
        >li {
            >a {
                padding: 1px 40px;
                display: block;
                position: relative;
                height: 40px;
                color: $text;
                text-decoration: none;

                &:hover {
                    background: $lightbgc;
                    border-bottom: none;
                }
            }

            .router-link-active {
                background-color: #fff;
                border-right: 3px solid $deepbgc;

                @media (min-width: 500px) {
                    border-right: none;

                    &::after {
                        content: "";
                        display: block;
                        animation: bdrolate 0.8s;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 3px;
                        height: 40px;
                        background-color: $deepbgc;
                    }
                }
            }
        }
    }

    @keyframes bdrolate {
        0% {
            transform: rotateX(90deg);
        }

        100% {
            transform: rotateX(0deg);
        }
    }
}

main {
    padding-left: 10px;
    overflow: auto;
}
</style>