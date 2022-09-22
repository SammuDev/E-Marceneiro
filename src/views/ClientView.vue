<template>

    <div class="container-fluid">
        <h1 class="jumbotron ">Clientes</h1>
        <form class="p-3 border bg-light shadow-sm rounded " action="submit">
            <TextTool label="Nome" placeHol="Entre com nome do Cliente" />
            <EmailTool/>
        </form>
    </div>



</template>

<script>

import TextTool from '@/components/TextTool.vue';
import EmailTool from '@/components/EmailTool.vue';


export default {
    components: {
        TextTool,
        EmailTool
    }

}
</script>

<style>

</style>
