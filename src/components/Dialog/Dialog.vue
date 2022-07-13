<template>
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <br>

    <h3>基础用法</h3>
    <p>Dialog 弹出一个对话框。</p>
    <Demo :component="DialogBase" />

    <h3>支持验证对话框内容</h3>
    <p>Dialog 弹出一个对话框，支持对<span class="fontSty">对话框内容进行逻辑处理</span> ,具体逻辑于ok函数中实现。</p>
    <Demo :component="DialogVerify" />

    <h3>支持 closeOnClickOverlay</h3>
    <p>Dialog 弹出一个对话框，通过为组件添加closeOnClickOverlay属性，来控制<span class="fontSty">点击遮罩层</span> 是否关闭对话框。</p>
    <Demo :component="DialogOverlay" />

    <h3>一键开启 Dialog</h3>
    <p>Dialog 弹出一个对话框，引用<span class="fontSty">ts模块</span> ：openDialog，创建Dialog组件 </p>
    <Demo :component="DialogByTs" />

</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import DialogBase from './DialogModules/DialogBase.vue';
import DialogByTs from './DialogModules/DialogByTs.vue';
import DialogVerify from './DialogModules/DialogVerify.vue';
import DialogOverlay from './DialogModules/DialogOverlay.vue';
import Demo from '../Demo.vue'
import { ref } from 'vue';
import { openDialog } from '../../lib/openDialog'
export default {
    components: { Dialog, Button, Demo },
    setup() {
        const x = ref(false);
        // 切换对话框
        const toggle = () => {
            x.value = !x.value;
        }
        // 对ok按钮进行校验
        const fn1 = () => {
            // ......
            return true;
        }
        // 对cancel按钮进行校验
        const fn2 = () => {
            return true;
        }
        // 一句话打开Dialog
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '你好呀！',
                ok() {
                    // 返回值不为 false 即可往下走，具体逻辑可移步至 lib/Dialog 设置
                },
                cancel() {
                    // 点击即可往下走，具体逻辑可移步至 lib/Dialog 设置
                }
            });
        }
        return { x, toggle, fn1, fn2, showDialog, DialogBase, DialogByTs, DialogVerify, DialogOverlay }
    }
}
</script>
