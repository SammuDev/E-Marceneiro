<template>
    <section class="container">
        <div class="row margin">
        <div class="col-md-8 col-sm-0">
        <h3 class="jumbotron">Insumos:</h3>
        <div class="pesquisar">
            <label for="inptPesq">Pesquisa:</label>
            <input type="search" name="inptPesq" id="inptPesq" placeholder="Pesquise aqui um item" v-model="pesquisar" />
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Fabricante</th>
                    <th scope="col">Unidade</th>
                    <th scope="col">Preço</th>
                    <th scope="col" class=" col-lg-2 col-md-3 text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod, index) in produtos" :key="index"> 
                    <!-- <th scope="row"> -->
                    <td>{{prod.id}}</td>
                    <td><img v-bind:src="prod.lnkImg" id="imgprdpeq" class="card-img-top" alt="imagem do produto"/></td> 
                    <td>{{prod.nome}}</td>
                    <td>{{prod.fabricante}}</td>
                    <td>{{prod.unidade}}</td>
                    <td>{{prod.preco}}</td>
                    <td class="text-center">
                        <a href="#" @click="editarItem(prod.id)" >
                            <div class="btn btn-outline-primary alterar me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z">
                                    </path>
                                </svg>
                            </div>
                        </a>
                        <a href="#" @click="removerItem(index, prod.nome)" >
                            <div class="btn btn-outline-danger alterar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </div>
                        </a>
                    </td>
                    <!-- <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
                        viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg></td> -->
                </tr>
                
            </tbody>
        </table>
        </div>
        <div class="col-md-4 col-sm-12">
        <h3 class="jumbotron">Dicas:</h3>
        <div class="margin">
        <p>Como cadastrar um novo orçamento?</p>
        <hr>
        <p>Como remover um novo orçamento?</p>
        <hr>
        <p>Outros tópicos</p>
        </div>
        </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only"></span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only"></span>
                    </a>
                </li>
            </ul>
        </nav>
        </section>
</template>

<script>
export default ({
  data() {
    return {
        pesquisar: ''
    }
  },
  computed: {
    produtos() {
        let local = this.pesquisar.toLowerCase();
        return this.$store.state.produtos.lista.filter(
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
      this.$store.state.produtos.alteraIndice(pItemId);
      this.$router.replace('/productedit');
    },
    removerItem(pItemId, pItemNome) {
        if (confirm(`Deseja remover o item ${pItemNome}?`)) {
            this.$store.state.produtos.removeItm(pItemId);    
        }
    }
  },
  mounted() {
    if (this.$store.state.produtos.qtdListaCarregada==0) {
        this.$store.commit('PRD_OBTEMLISTA', this.$store.state.produtos);
    }
  }
})
</script>


<style scoped>
.table{
margin: 20px auto 400px auto
;}
.margin{
margin: 50px auto auto auto;
vertical-align: middle;
}
#imgprdpeq{
    max-height: 42px;
}
</style>

