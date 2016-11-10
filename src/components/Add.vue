<template>
    <div class="add-input">
        <input type="text">
        <svg class="icon icon-edit" aria-hidden="true">
            <use xlink:href="#icon-edit"></use>
        </svg>
    </div>
</template>
<script>
    export default {
        name: 'Add'
    }
</script>
<style lang="sass" rel="stylesheet/sass">
@import "../styles/colors";

.add-input {
    .icon-edit {
        fill: red;
    }
}
</style>
