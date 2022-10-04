<template>
  <div class="home">
    <section class="container">
      <!--   <div class="mt-4 img-fluid">
            <div>
              <img src="../assets/brand\regua.webp" class="img-fluid" alt="Responsive image">
            </div>
        </div> -->
      <div class="card-group mt-4">
        <div class="card">
          <img class="card-img-top" src="../assets/brand/regua.jpg" alt="Imagem de capa do card">
          <!-- <div class="card-body">
      <h5 class="card-title">Título do card</h5>
      <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
      <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
    </div> -->
        </div>
      </div>
      <div class="card-group card-margin">
        <div class="card">
          <img class="card-img-top" src="../assets/brand/woodworker.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Meus Orçamentos</h5>
            <p class="card-text">Veja e gerencie todos os seus orçamentos desde o início até a entrega efetiva do contratado.</p>
            <!-- <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p> -->
            <router-link class="btn btn-primary" to="/orcview">Orçamentos</router-link>
          </div>
        </div>
        <div class="card  mx-3">
          <img class="card-img-top" src="../assets/brand/Carpinteiro.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Meus Clientes</h5>
            <p class="card-text">Cadastre, edite, comunique-se e gerencie todos os seus clientes de um único lugar!</p>
            <!-- <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p> -->
            <router-link class="btn btn-primary" to="/clientsview">Cliente</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/brand/martelo.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Lista de Produtos/Insumos</h5>
            <p class="card-text">Pesquise produtos e insumos para seus orçamentos nas lojas filiadas e sempre com os melhores preços para você!</p>
            <p class="card-text"><small class="text-muted">{{qtdInsumos}} itens cadastrados</small></p>
            <router-link class="btn btn-primary" to="/productview">Produtos e Insumos</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>



export default {
  name: 'HomeView',
  components: {

  },
    computed: {
        qtdInsumos() {
            return this.$store.state.produtos.lista.length;
        }
    }
}
</script>

<style scoped>
.image {
  height: 550px;
  margin: 20px 0px 20px 0px;
  width: 2000px;
}

.card-margin {
  margin: 20px 0px 200px 0px;
}
</style>
