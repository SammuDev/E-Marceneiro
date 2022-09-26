<template>
    <!-- <div id="navbar"> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
            <div class="container">

                <a class="navbar-brand" href="/">
                    <img src="../assets/brand/logo.png" alt="e-marceneiro" width="48" height="48">
                    {{menuTitle}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav px-3">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/homeview">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/orcview">Orçamentos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/adorcview">AddOrçamentos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ambienteorc">Ambiente</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/clientview" class="nav-link">Clientes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/productview">Insumos</router-link>
                        </li>
                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/">Sair</router-link> -->
                             
                            <a class="nav-link" @click="logout">Bem-vindo <strong>{{ nomeUsuario }}</strong>. [Sair]</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/helpview">Ajuda</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- </div> -->
</template>

<script>



export default {

  props: {
        menuTitle: {}
  },
  computed: {
    nomeUsuario () {
        return  this.$store.state.users.usuarios[this.$store.state.users.usrLogado-1].nome;
    }
  },
  methods: {
    logout() {
        this.$store.commit('USR_LOGOUT', -1);
        this.$router.replace('/');
    }
  }
}
</script>

<style scoped>
.navbar.navbar-dark.bg-dark {
    background-color: #181848 !important;
}


</style>
    