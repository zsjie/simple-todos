<template>
    <div class="wrapper">
        <div class="content">
            <add></add>
        </div>
    </div>
</template>
<script>
    import initShortCut from './components/shortCut'
    import Add from './components/Add.vue'

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },

        mounted() {
            initShortCut()
        },

        components: {
            Add
        }
    }
</script>
<style lang="sass" rel="stylesheet/sass">
@import "./styles/reset";
@import "./styles/icons";
@import "./styles/colors";

body {
    background-color: #E8E8E8;
    font-family: 'Roboto Slab','Times New Roman',serif;
}

input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-family: 'Roboto Slab','Times New Roman',serif;
}

.wrapper {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
    .content {
        margin: 0 auto;
        width: 960px;
    }
}
</style>
