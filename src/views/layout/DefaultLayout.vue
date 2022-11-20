<template>
  <div id="wrap">
    <div id="mainWrap" class="inner">
      <Left/>
      <div id="mainSection">
        <Header/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Left from '@/views/layout/Left'
import Header from '@/views/layout/Header'


export default {
  name: "DefaultLayout",
  components: {
    Left,
    Header,
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