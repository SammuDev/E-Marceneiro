<template>

<section class="container">

<div class="row margin">
<div class="col-md-8 col-sm-0">
<h3 class="jumbotron">Orçamento:</h3>
<div class="pesquisar">
    <label for="inptPesq">Pesquisa:</label>
    <input type="search" name="inptPesq" id="inptPesq" placeholder="Pesquise aqui um item" v-model="pesquisar" />
</div>
<router-link class="nav-link" to="/adorcview">
    <button class="btn btn-success btn-sm ms-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="bi bi-person-plus" viewBox="0 0 16 16">
            <path
                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path fill-rule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg> Novo Orçamento
</button>
</router-link>
<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Descrição</th>
            <th scope="col">Cliente</th>
            <th scope="col">Data</th>
            <th scope="col" class=" col-lg-2 col-md-3 text-center">Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(pedido, index) in pedidos" :key="index">
            <!-- <th scope="row">0001</th> -->
            <td>{{pedido.id}}</td>
            <td>{{pedido.descricao}}</td>
            <td>{{pedido.cliente}}</td>
            <td>{{pedido.data}}</td>
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
        pedidos() {
            let local = this.pesquisar.toLowerCase();
            return this.$store.state.pedidos.lista.filter(
                function (value) {
                    if ((local=='') || 
                        (value.descricao.toLowerCase().indexOf(local)>=0) /*||
                        (value.fabricante.toLowerCase().indexOf(local)>=0) */) {
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
      }//,
    //   mounted() {
    //     if (this.$store.state.produtos.qtdListaCarregada==0) {
    //         this.$store.commit('PRD_OBTEMLISTA', this.$store.state.produtos);
    //     }
    //   }
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
</style>

   