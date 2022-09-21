<template>
    <nav>
      <NavBar/>
    </nav>
    <router-view/>


    <formLogin/>
      <h1>Esta página será utilizada para exemplificar um crud</h1>
      <!-- <form>
        <label></label>
        <input
            type = "text"
            class = "form-control"
            id = "nome"
            placeholder="Digite aqui seu nome"
        />
      </form> -->
    
  </template>
  
  <script>
//   import NavBar from './components/NavBar.vue'
import FormLogin from './components/FormLogin.vue'
  
  export default {
    name: 'CrudTeste',
    components: {
      FormLogin
    }
  }
  </script>
  
  
  <style>
  </style>