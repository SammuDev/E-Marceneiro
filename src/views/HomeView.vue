<template>
  <div class="home">
    <section class="container">
      <!--   <div class="mt-4 img-fluid">
            <div>
              <img src="../assets/brand\regua.webp" class="img-fluid" alt="Responsive image">
            </div>
        </div> -->
      <div class="card-group ">
        <div class="card">
          <img class="card-img-top" src="../assets/brand\regua.webp" alt="Imagem de capa do card">
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
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um
              conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/brand/Carpinteiro.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um
              conteúdo adicional.</p>
            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/brand/martelo.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um
              conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em
              ação.</p>
            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
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
