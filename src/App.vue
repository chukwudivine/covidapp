<template>
  
  <Header />

  <Detail />
  
  <div class="container">
    <router-view/>
  </div>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Detail from "./components/Detail.vue";

export default{
  components: {
    Header,
    Footer,
    Detail
  },
  mounted(){
    document.title = 'Covid19 App'
  }
}
</script>