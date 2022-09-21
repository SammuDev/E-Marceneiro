<template>
    <div class="login">
      <form>
        <label for="nome">Seu nick</label>
        <input
            type = "text"
            class = "form-control"
            id = "nome"
            placeholder="Digite aqui seu nome"
        />
        <label for="password">Senha:</label>
        <input 
            type="password" 
            class = "form-control"
            name="password" 
            placeholder="Digite aqui seu nome"
            id=""
        >
      </form>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </div>
  </template>

<script>
//   import NavBar from './components/NavBar.vue'

export default {
    name: 'FormLogin'
    // components: {
    //   NavBar
    // }
    }
</script>