<template>
    <div class="login">
      <div class="areaLoginTop">
        <h1>e-Marceneiro</h1>
        <p> {{ inptNome }} {{ inptPass}} Somos uma plataforma perfeita para gerenciar seus orçamentos e clientes.</p>
        <p><strong>Teste gratuaitamente por 30 dias!</strong></p>
      </div>
      <form>
        <label for="nome">Seu nick</label>
        <input
            type = "text"
            class = "form-control"
            id = "nome"
            placeholder="Digite aqui seu nome"
            v-model="inptNome"
        />
        <label for="password">Senha:</label>
        <input 
            type="password" 
            class = "form-control"
            name="password" 
            placeholder="Digite aqui seu nome"
            id=""
            v-model="inptPass"
        >
      </form>
      <button type="button" class="btn btn-primary" v-on:click="logar()" >Entrar</button>
      <div class="areaLoginRodape"> 
        <small>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur perspiciatis nam architecto tempora magni iure aliquam ipsa distinctio sint, rerum sapiente dolores? Distinctio nam placeat itaque quo in a nisi.
        </small>
      </div>
    </div>
  </template>

<script>
export default {
  name: "FormLogin",
  data: () => ({
    inptNome: '',
    inptPass: ''
  }),
  // computed: {
  //   teste () {
  //     return this.$store.state.users;//.usuarios;
  //   }
  // },
  methods: {
    logar() {
      if ((this.inptNome != '') && (this.inptPass != '')) {
        let lUsr= { nome : this.inptNome, senha: this.inptPass };
        this.$store.commit('USR_LOGIN', lUsr);
        this.$router.replace('/homeview');
      }
    }
  }
}
  
</script>

<style>
  .areaLoginTop {
    background-color: #181848;
    color: #9696ac;
    padding: 0.5em;
  }
  .areaLoginRodape{
    padding: 0.5em;
    padding-top: 3em;
  }
  form {
    padding-top: 3em;
  }
</style>