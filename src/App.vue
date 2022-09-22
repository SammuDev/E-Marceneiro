<template>
  <div id="app">
    <NavBar menuTitle ="e-Marceneiro"/>
    <router-view/>
  </div>

</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>



