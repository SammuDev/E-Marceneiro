<template>
    <div class="mb-3 col">
        <label for="idTextTool" class="form-label">{{label}}</label>
        <input type="text" class="form-control" id="idTextTool" :placeholder="placeHol">
    </div>
</template>

<script>
export default {
    props: {
        label:{},
        placeHol: {}
    }
}
</script>

<style>

</style>
