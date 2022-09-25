<template>
    <div class="login">
      <div class="areaLoginTop">
        <h1>e-Marceneiro</h1>
        <p>Somos uma plataforma perfeita para gerenciar seus orçamentos e clientes.</p>
        <p><strong>Teste gratuitamente por 30 dias!</strong></p>
      </div>
      <form class="mb-3">
        <div v-if="emCadastramento==false">
          <h1>Login</h1>
        </div>
        <div v-else>
          <h1>Cadastrar</h1>
        </div>
        <label for="nome">Nome</label>
        <input
            type = "text"
            class = "form-control"
            id = "nome"
            placeholder="Digite aqui seu nome"
            v-model="inptNome"
            required
        />
        <div  v-if="emCadastramento==true" >
          <label for="email"  >Seu e-mail</label>
          <input
              type = "email"
              class = "form-control"
              id = "email"
              placeholder="seuemail@gmail.com"
              v-model="inptEmail"
          />
        </div>
        <label for="password">Senha:</label>
        <input 
            type="password" 
            class = "form-control"
            name="password" 
            placeholder="Digite aqui seu nome"
            id=""
            v-model="inptPass"
            required
        >
      </form>
      <button  v-if="emCadastramento==false" type="button" class="btn btn-primary" @click="logar()" >Entrar</button>
      <button v-else type="button" class="btn btn-primary" @click="cadastrar()" >Cadastrar</button>
      <div class="mt-3" v-if="emCadastramento==false">
        Não tem senha? <a @click="mudarFase()" class="link-secondary ">Cadastrar-se</a> já!
      </div>
      <div v-else>
        Voltar para o <a @click="mudarFase()" class="link-secondary">Login</a>
      </div>
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
    emCadastramento: false,
    inptNome: '',
    inptPass: ''
  }),
  // computed: {
  //   teste () {
  //     return this.$store.state.users;//.usuarios;
  //   }
  // },
  methods: {
    mudarFase() {
      this.emCadastramento = !this.emCadastramento;
    },
    logar() {
      if ((this.inptNome != '') && (this.inptPass != '')) {
        let lUsr= { nome : this.inptNome, senha: this.inptPass };
        this.$store.commit('USR_LOGIN', lUsr);
        this.$router.replace('/homeview');
      }
    },
    cadastrar() {
      if ((this.inptNome != '') && (this.inptPass != '')) {
        let lUsr= { nome : this.inptNome, senha: this.inptPass };
        this.$store.commit('USR_ADD', lUsr);
        this.emCadastramento = !this.emCadastramento;
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