<template>
 <div class="mb-3">
    <label for="idEmailTool2" class="form-label">Email</label>
           
        <input
            id="idEmailTool2"
            type="email"
            class="form-control"
            :placeholder="placeHol"
            :aria-label="placeHol"
        >
            
   
</div>
</template>

<script>
export default {
    props: {
        placeHol:{}
    }

};
</script>

<style>
</style>