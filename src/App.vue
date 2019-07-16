<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // this.$nextTick(() => {
    //   this.$store.commit('SET_SIDEBAR_STATUS', this.$router.history.pending.name)
    // })
  }
}
</script>
