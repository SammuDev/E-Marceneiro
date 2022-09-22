<template>
    
    <section class="container">
        <div class="row">
            <div class="col-md-8 col-sm-0">
                <img class="imagem" src="../assets/brand/undraw_under_construction_46pa.png" alt="" srcset="">
            </div>
            <div class="col-md-4 col-sm-12">
                <FormLogin />
            </div>
        </div>
    </section>
    <!-- <h1 class="jumbotron"> Pagina Login </h1> -->
</template>

<script>
import FormLogin from "../components/FormLogin.vue"; 

export default {
  name: 'LoginView',
  components: {
    FormLogin  
  }
}
</script>

<style scoped>
    .imagem {
        width: 100%;
    }
</style>