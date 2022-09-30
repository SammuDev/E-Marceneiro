<template>
    <div class="col-12">
        <form>
            <div class="form-group">
                <label for="nome">Nome do Produto:</label>
                <input 
                    type="text"
                    class="form-control" 
                    name="" 
                    id="nome"
                    placeholder="Ex: Celular..."
                    v-model.trim.lazy="produto.nome"
                />
                <label for="fabricante">Fabricante e/ou Fornecedores</label>
                <select name="" id="fabricante" class="form-control" v-model="produto.fabricante" >
                    <option disabled value>ex: Apple</option>
                    <option v-for="(fab, key) in fabricantes" v-bind:key="fab" v-bind:value="produto.fabricante">{{key}}</option>
                </select>
                <label for="preco">Preço do Item em Reais</label>
                <input 
                    type="text"
                    class="form-control" 
                    name="" 
                    id="preco"
                    placeholder="Ex: 10,99"
                    v-model.trim.lazy="produto.preco"
                />
                <label for="imagem">Link da imagem:</label>
                <input 
                    type="text"
                    class="form-control" 
                    name="" 
                    id="imagem"
                    placeholder="Ex: https://www.minhasimagens.com/imagem.jpg"
                    v-model.trim.lazy="produto.lnkImg"
                />
            
            </div>
            <div>
                <button type="submit" class="btn btn-primary" v-on:click="submitFormulario">Gravar</button>
                <button type="submit" class="btn btn-secundary" v-on:click="submitCancel">Cancelar</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: "lvCadastroProduto",
    data: function () {
        return {
            fabricantes: {
                APPLE  : 'Apple Computadores',
                SAMSUNG: 'Samsung Eletronics',
                OUTROS : 'Outros'
            },
            produto: {
                "id"        : -1, 
                "nome"      : "",
                "fabricante": "",
                "unidade"   : "m2", 
                "preco"     : 100, 
                "lnkImg"    :''
            }
        }
    },
    computed: { },
    methods: {
        podeGravar() {
            let r='';
            if (this.produto.nome.trim()=='') r='Você deve informar um nome para este produto!';

            if (r!='') alert(r);
            return r=='';
        },
        submitFormulario() {
            if (this.podeGravar()) {
                this.$store.state.produtos.gravaItm(this.produto);
                alert('Item Gravado');
            }
        },
        submitCancel() {
            this.$router.replace('/homeview');
        }
    },
     mounted() {
         this.produto = this.$store.state.produtos.carregaItem();
    }
}
</script>