<template>
  <div id="app" >
    <NavBar v-if="usuarioEstaLogado" menuTitle ="e-Marceneiro"/>
    <router-view/>
    <FooterBar v-if="usuarioEstaLogado" msg="Projeto de Bloco - Desenvolvimento FrontEnd - Cidclei Schmitt - Eng. de Software ( Anderson, Leonardo, Samuel, Edvaldo e Jorge)"
      copyright="2022"/>
    
  </div>

</template>

<script>

 import NavBar from "./components/NavBar.vue";
 import FooterBar from "./components/FooterBar.vue";
//  import router from "./router";
// só guardando o comando: <NavBar v-if="$route.path!='/'" menuTitle ="e-Marceneiro"/> 


export default {
  name: "App",
  props: {
    logged: Boolean
  },
  components: {
    NavBar,
    FooterBar
  },
  computed: {
    usuarioEstaLogado: function() {
      return this.$store.state.users.usrLogado>0;
    }
  },
  
  // created() {
  //   this.$route.name === { name: 'homeview'} ? !this.logged : this.logged
  // }

 
};

// router.beforeEach((to, from, next) => {
//   if (to.path!=='/' && store.state.users.usrLogado<1) {
//     next('/');
//   } else {
//     next();
//     // console.log('validando host');
//   }
// })
</script>



