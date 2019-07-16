export default {
  data() {
    return {
      pane_h: 0
    }
  },
  computed: {
    paneStyle() {
      // 30 is app-container padding
      return {
        height: ~~(this.pane_h - 30) + 'px'
      }
    }
  },
  mounted() {
    this.pane_h = document.body.clientHeight - this.$refs.autoHeightPane.getBoundingClientRect().top
  }
}
