<template>
    <h1>Cadastro de Insumo/Item</h1>
    <section class="container">
        <LvCadastroProduto/>
    </section>
</template>
  
<script>
import LvCadastroProduto from '@/components/lvCadastroProduto.vue';
  // @ is an alias to /src
  
  export default {
    name: 'ProductEdit',
    components: {
    LvCadastroProduto
}
}
</script>