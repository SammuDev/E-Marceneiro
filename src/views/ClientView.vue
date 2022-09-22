<template>

    <div class="container-fluid px-2 py-3 px-sm-5 ">
        <h1 class="jumbotron ">Clientes</h1>
        <form class="p-3 border bg-light shadow-sm rounded " action="submit">
            <TextTool label="Nome" placeHol="Entre com nome do Cliente" />
            <EmailTool2 placeHol="Email do Cliente"/>

        </form>
    </div>



</template>

<script>

import TextTool from '@/components/TextTool.vue';
import EmailTool2 from '@/components/EmailTool2.vue';


export default {
    components: {
        TextTool,
        
        EmailTool2
    }

}
</script>

<style>

</style>
