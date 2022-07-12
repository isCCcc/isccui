<template>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-shanzhu"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <span v-if="toggleAsideVisible" class="toggleAside" @click="toggleMenu">
            <svg class="icon">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    props: {
        toggleAsideVisible: {
            type: Boolean
        }
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible') // get

        const toggleMenu = () => {
            asideVisible.value = !asideVisible.value;
        }

        return { toggleMenu }
    }
}
</script>

<style lang="scss" scoped>
$color: #ad6bb5;

.topnav {
    color: $color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 16px;
    z-index: 100;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 10px 1em;

            >a {
                text-decoration: none;

                &:hover {
                    border-bottom: none;
                }
            }
        }
    }

    >.toggleAside {
        display: none;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);

        >svg {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>