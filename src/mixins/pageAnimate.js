export default {
  data() {
    return {
      page_animate_opacity: 0,
      page_animate_translate3d: 'translate3d(0, 20px, 0)'
    }
  },
  methods: {

  },
  computed: {
    pageAnimate() {
      return {
        opacity: this.page_animate_opacity,
        transform: this.page_animate_translate3d,
        transition: 'all .5s'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.page_animate_opacity = 1
      this.page_animate_translate3d = 'translate3d(0px, 0, 0)'
    }, 5)
  }
}
