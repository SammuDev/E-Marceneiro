<template>

    <section class="container">

        <div class="row margin">
            <div class="col-md-8 col-sm-0">
                <h3 class="jumbotron">Item(ns) no orçamento:</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Qtd</th>
                            <th scope="col">Produto/Insumo</th>
                            <th scope="col">Valor</th>
                            <th scope="col">-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(peditm, index) in pedido.produtos" :key="index">
                            <td>{{peditm.prodQtd}}</td>
                            <td>{{itmPedido(peditm.prodId).nome}}</td>
                            <td>{{peditm.prodPreco}}</td>
                            <td>
                                <a href="#" @click="removerItemPedido(index)" >
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
                <h3 class="jumbotron">Dt de Cadastro:</h3>


            <div class="input-group date">
                <input type="text" class="form-control" value="12-02-2012">
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
            </div>

            <h5 class="jumbotron">Total dos ambientes: {{pedido.obtemVrTotal}}</h5>
            <h6></h6>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
            </div>
            <button type="button" class="btn col-12 btn-success custom" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Incluir itens no pedido
            </button>
            <!-- <button type="button" class="btn col-12 btn-success custom">Adicionar Ambiente</button> -->
            <button type="button" class="button-margin btn col-6 btn-danger btn-sm">Cancelar</button>
            <button type="button" class="button-margin btn col-6 btn-primary btn-sm">Próximo</button>
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


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Incluir Produto ou Insumo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="nome">Qtd</label>
                    <input 
                        type="text"
                        class="form-control" 
                        name="" 
                        id="nome"
                        placeholder="Ex: Celular..."
                        v-model.trim.lazy="prodSelQtd"
                    />
                    <label for="produto">Produto ou Insumo:</label>
                    <select name="" id="produto" class="form-control" v-model="prodSelId" >
                        <option disabled value>ex: Apple</option>
                        <option v-for="(prod) in produtos" v-bind:key="prod.id" v-bind:value="prod.id">{{prod.nome}}</option>
                    </select>
                    <!-- <p>Valor R$: {{prod.preco}}</p> -->
                    <!-- <label for="valor">Valor do Item</label>
                    <input 
                        type="text"
                        class="form-control" 
                        name="" 
                        id="valor"
                        placeholder="9,99"
                        v-model.trim.lazy="prodSelValor"
                        v-bind:value="prod.preco"
                    /> -->
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                <button type="button" class="btn btn-primary" @click="itmIncluir()">Incluir</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default ({
      data() {
        return {
            pesquisar : '',
            prodSelId : -1,
            prodSelQtd: 1,
            prodSelValor: 0.00
        }
      },
      computed: {
        pedido() {
            return this.$store.state.pedidos.obtemPedido(0);
        },
        produtos() {
            return this.$store.state.produtos.lista;
        }
      },
      methods: {
        itmPedido(pIdPrd) {
            return this.$store.state.produtos.carregaItemPeloId(pIdPrd);
        },
        itmIncluir() {
            this.$store.state.pedidos.pedidoAddProd(this.prodSelQtd, this.prodSelId, this.itmPedido(this.prodSelId).preco*this.prodSelQtd);
        },
        removerItemPedido(pItemIdx) {
            this.$store.state.pedidos.pedidoDelProd(pItemIdx);
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
h5{
    margin: 20px auto 10px auto;
}

.table {
    margin: 20px auto 400px auto;
}

.margin {
    margin: 50px auto auto auto;
    vertical-align: middle;
}
.button-margin{
    margin: 20px auto auto auto;
}
</style>