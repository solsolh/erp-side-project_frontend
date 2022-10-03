<template>
  <div id="mainWrap" class="inner">
    <Left></Left>
    <section id="mainSection">
      <Header></Header>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Left from '@/views/layout/Left'
import Header from '@/views/layout/Header'


export default {
  name: "DefaultLayout",
  components: {
    Left,
    Header
  },
  data: function () {
    return {
      windowWidth: null,
      exceptRoutePath: [
        "/index"
      ]
    }
  },
}
</script>

<style scoped>

</style>