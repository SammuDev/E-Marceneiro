
<template>

    <div class="mb-3 col">
        <label for="idTextTool" class="form-label">{{label}}</label>
        <input type="text" class="form-control" id="idTextTool" :placeholder="placeHol" :value="tValue">
    </div>
    

</template>

<script>
export default {
    props: {
        label: {},
        placeHol: {},
        tValue:{}
        
    },

    
}
</script>

<style>

</style>
