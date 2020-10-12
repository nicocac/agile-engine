<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    initStore() {
      this.$store.dispatch('LOGIN').then(this.setImages)
    },
    setImages () {
      this.$store.dispatch('SET_IMAGES', {page: 1})
    }
  },
  mounted() {
    this.initStore()
  }
}
</script>
