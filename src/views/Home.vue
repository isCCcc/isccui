<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav />
            <div class="banner">
                <h1>Blanche-UI</h1>
                <h2 style="margin: 5px;">一套基于 Vue3.0 的桌面端组件库</h2>
                <p class="actions">
                    <a href="https://github.com/isCCcc">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于Vue3</h3>
                    <p>使用 Vue3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript</h3>
                    <p>源代码采用 Typescript 书写（非严格检查）</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-light"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极为简洁</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
$btn: #ad6bb5;
$border-radius: 4px;
$color: #1b1b1b;

.topnavAndBanner {
    background: linear-gradient(45deg,
            rgba(227, 239, 255, 0.9) 0%, rgb(243, 231, 233, 0.8) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    margin: 10px auto;
    width: 400px;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            color: #6f486b;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text;
            }
        }
    }
}

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            color: #fff;
            background-color: $btn;
            display: inline-block;
            border-radius: $border-radius;
            padding: 8px 24px;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>