<template>
  <div id="app" >
    <NavBar v-if="!logged" menuTitle ="e-Marceneiro"/>
    <router-view/>
    <FooterBar v-if="!logged" msg="Projeto de Bloco - Desenvolvimento FrontEnd - Cidclei Schmitt - Eng. de Software ( Anderson, Leonardo, Samuel, Edvaldo e Jorge)"
      copyright="2022"/>
    
  </div>

</template>

<script>

 import NavBar from "./components/NavBar.vue";
 import FooterBar from "./components/FooterBar.vue";
 


export default {
  name: "App",
  props: {
    logged: Boolean
  },
  components: {
    NavBar,
    FooterBar
},
  
  created() {
    console.log(this.$route)
    this.$route.name === { name: 'loginview'} ? this.logged : !this.logged
  }

 
};
</script>



