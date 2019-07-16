import arabia_To_SimplifiedChinese from '@/filters/arabia_To_SimplifiedChinese' // global filter
import num_To_Letter from '@/filters/num_To_Letter' // global filter
import parseTime from '@/filters/parseTime' // global filter

var myPlugins = {
  install (Vue, options) {
    Vue.filter('numberConversion', arabia_To_SimplifiedChinese)
    Vue.filter('numToLetter', num_To_Letter)
    Vue.filter('parseTime', parseTime)

    Vue.mixin({
      methods: {
        changePageName (pageName) {
          // store/pageName.js
          this.$store.commit('SET_PAGE_NAME', pageName)
        }
      }
    })

    Vue.prototype.log = console.log.bind(console)
    // Vue.prototype.log = function() {}
  }
}

export default myPlugins
