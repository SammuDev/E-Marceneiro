<template>
    <div class="mb-3">
        <label for="idPhone" class="form-label">Telefone</label>
        <input id="idPhone" type="text" class="form-control" :value="tValue" placeholder="Telefone com 8 ou 9 dígitos" aria-label="" maxlength="15">
    </div>
</template>

<script>


export default {
    props:{
        tValue:{}
    },
    
}
</script>

<style>

</style>
