<template>
    <section class="container">
        <div class="row margin">
        <div class="col-md-8 col-sm-0">
        <h3 class="jumbotron">Insumos:</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Fabricante</th>
                    <th scope="col">Unidade</th>
                    <th scope="col">Preço</th>
                    <th scope="col">-</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod, index) in produtos" :key="index"> 
                    <!-- <th scope="row"> -->
                    <td>{{prod.id}}</td> 
                    <td>{{prod.nome}}</td>
                    <td>{{prod.fabricante}}</td>
                    <td>{{prod.unidade}}</td>
                    <td>{{prod.preco}}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
                        viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg></td>
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
  computed: {
    produtos () {
        this.$store.commit('PRD_OBTEMLISTA', this.$store.state.produtos);//.data().lista);
        return this.$store.state.produtos.lista;
        // return this.$store.state.produtos.data().lista;
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
</style>

