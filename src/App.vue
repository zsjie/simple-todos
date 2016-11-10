<template>
    <div class="wrapper">
        <add></add>
    </div>
</template>
<script>
    import Add from './components/Add.vue'

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
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

.wrapper {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-color: $primary;
}
</style>
