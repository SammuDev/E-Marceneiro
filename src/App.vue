<template>
  <div id="app" >
    <NavBar v-if="$route.path!='/'" menuTitle ="e-Marceneiro"/>
    <router-view/>
    <FooterBar v-if="$route.path!='/'" msg="Projeto de Bloco - Desenvolvimento FrontEnd - Cidclei Schmitt - Eng. de Software ( Anderson, Leonardo, Samuel, Edvaldo e Jorge)"
      copyright="2022"/>
    
  </div>

</template>

<script>
 import NavBar from "./components/NavBar.vue";
 import FooterBar from "./components/FooterBar.vue";
 


export default {
  name: "App",
  components: {
    NavBar,
    FooterBar
}
};
</script>



