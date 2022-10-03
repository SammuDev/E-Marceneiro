<template>

    <div class=" col-xl-8 col-sm-12 container-fluid px-2 py-3 px-sm-5 ">
        <h1 class="jumbotron ">Clientes</h1>
        <form class="d-line p-3 border bg-light shadow-sm rounded " action="submit">
            <div class="row">
                <div class="col-lg-3 col-sm-12">
                    <TextLabeled label="#ID" placeHol="Código do Cliente" v-bind:tValue="clientInstance.id" disabled />
                </div>
                <div class="col-lg-9 col-sm-12">
                    <TextTool label="Nome" placeHol="Entre com nome do Cliente" v-bind:tValue="clientInstance.firstName" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <EmailTool2 placeHol="Email do Cliente" v-bind:tValue="clientInstance.email" />
                </div>

                <div class="col-lg-6 col-sm-12">
                    <PhoneText v-bind:tValue="clientInstance.phone"/>
                </div>
                
            </div>
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-sm-6"></div>
                <div class="col-xl-3 col-lg-3 col-sm-12 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button @click="backToList" class="btn btn-danger float-end">Cancelar</button>
                    <button @click="updateClient" class="btn btn-success float-end">Salvar</button>
                </div>
            </div>

        </form>
    </div>



</template>

<script>

import TextTool from '@/components/TextTool.vue';
import EmailTool2 from '@/components/EmailTool2.vue';
import PhoneText from '@/components/PhoneText.vue';
import TextLabeled from '@/components/TextLabeled.vue';


export default {
    components: {
        TextTool,
        EmailTool2,
        PhoneText,
        TextLabeled
    },

    data() {
        return {
        clientInstance: {
            "id" : -1,
            "firstName" : "",
            "email" :"",
            "phone":""

        }
    }
    },

    methods:{
        backToList(){
            this.$router.replace('/clientsview');
        },
        toUpdate() {
            let r='';
            if (this.clientInstance.firstName.trim()=='') r='Entre com um nome válido.';

            if (r!='') alert(r);
            return r=='';
        },
        updateClient(){
            if (this.toUpdate()) {
                this.$store.state.Client.upToDateClient(this.clientInstance);
                // alert('Item Gravado');
                this.$router.replace('/clientsview');
            }
        }

        },
    
        mounted() {
            this.clientInstance = this.$store.state.Clients.loadClient();
            console.log(this.clientInstance)
        }
    }


</script>

<style>

</style>
