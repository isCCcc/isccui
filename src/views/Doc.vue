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
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
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
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

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

    >aside {
        flex-shrink: 0; //宽度变化时不收缩
    }

    >main {
        flex-grow: 1; //宽度变化时占据剩余空间
        padding: 16px;
        background-color: rgb(255, 255, 255);
    }
}

aside {
    // background: #02bcb0;
    background: linear-gradient(145deg, #dcfcfb, #bbebe8);
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 75px;
    height: 100%;

    >h2 {
        margin-bottom: 4px;
        padding-left: 8px;
    }

    >ol {
        >li {
            >a {
                padding: 4px 16px;
                display: block;
            }

            .router-link-active {
                background-color: #fff;
                // text-decoration: underline;
            }

        }
    }
}

main {
    overflow: auto;
}
</style>