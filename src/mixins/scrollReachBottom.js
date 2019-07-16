const throttle = function(fn, delay, mustRunDelay) {
  let timer = null
  let t_start

  return function() {
    const context = this
    const args = arguments
    const t_curr = +new Date()
    clearTimeout(timer)

    if (!t_start) {
      t_start = t_curr
    }

    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args)
      t_start = t_curr
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }
}

export default {
  data() {
    return {
      reachBottomDistance: 50
    }
  },
  computed: {

  },
  methods: {
    scrollReachBottom() {
      const scrollEl = this.$refs.autoHeightPane
      scrollEl.addEventListener('scroll', throttle(() => {
        if (scrollEl.scrollHeight - scrollEl.scrollTop <= scrollEl.clientHeight + this.reachBottomDistance) {
          this.$emit('reachBottom')
        }
      }, 50, 100))
    }
  },
  mounted() {
    this.scrollReachBottom()
  }
}
