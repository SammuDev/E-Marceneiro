<template>
    <div class="pesquisar">
        <label for="inptPesq">Pesquisa:</label>
        <input type="search" name="inptPesq" id="inptPesq" placeholder="Pesquise aqui um item" v-model="pesquisar" />
    </div>
    <div class="row"> 
        <div class="col-12 col-sm-6 col-md-3" v-for="(prod, index) in produtos" :key="index">
            <div class="card">
                <img v-bind:src="prod.lnkImg" class="card-img-top" alt="imagem do produto"/>
                <div class="card-body">
                    <h5 class="card-title">{{ prod.nome }}</h5>
                    <p class="card-text" v-html="prod.fabricante"></p>
                    <p class="card-text">R$ {{ prod.preco }},00</p>
                    <a href="#" 
                       @click="editarItem(prod.id)" 
                       class="btn btn-primary">Editar Item</a>
                    
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default ({
    name: 'lvCardsProdutos',
    data() {
        return {
            pesquisar: ''
        }
    },
    computed: {
        produtos() {
            let local = this.pesquisar.toLowerCase();
            return this.$store.state.lista.filter(
                function (value) {
                    if ((local=='') || 
                        (value.nome.toLowerCase().indexOf(local)>=0) ||
                        (value.fabricante.toLowerCase().indexOf(local)>=0) ) {
                        return value;
                    } 
                }
            );
        }
    },
    methods: {
      editarItem(pItemId) {
        this.$store.state.alteraIndice(pItemId);
        this.$router.replace('/cadastro');
      }
    },
    mounted() {
        this.$store.commit('PRD_OBTEMLISTA', this.$store.state);
    }
}
)
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