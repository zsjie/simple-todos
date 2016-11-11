<template>
    <div class="add-input">
        <div class="input-group">
            <input type="text" placeholder="添加事项..."
                   v-on:focus="focus"
                   v-on:blur="blur"
                   v-model="todo">
            <div class="button">
                <svg class="icon icon-edit" aria-hidden="true">
                    <use xlink:href="#icon-edit"></use>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Add',

        data() {
            return {
                todo: ''
            }
        },

        methods: {
            focus(event) {
                window.__INPUT_FOCUS__ = true
            },

            blur(event) {
                window.__INPUT_FOCUS__ = false
            }
        }
    }
</script>
<style lang="sass" rel="stylesheet/sass">
@import "../styles/colors";

.add-input {
    padding-top: 20px;
    .input-group {
        position: relative;
        width: 80%;
        margin: 0 auto;
        height: 46px;
        padding: 7px 16px;
        box-sizing: border-box;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
        background-color: #fafafa;
        overflow: hidden;
        position: relative;
        border-radius: 2px;
        input[type=text] {
            background-color: #fafafa;
            width: 90%;
            height: 32px;
        }
        .button {
            position: absolute;
            top: 11px;
            right: 36px;
            cursor: pointer;
            .icon-edit {
                width: 24px;
                height: 24px;
                fill: #747474;
            }
            .icon-edit:hover {
                fill: #252525;
            }
        }
    }
}
</style>
