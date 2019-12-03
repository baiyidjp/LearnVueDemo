// 混入的实现 对不同的组件中的公共代码进行提取，methods中的代码片段不可以提取，但是生命周期的代码可以提取
import BackTop from "../components/content/backTop/BackTop";

export const BackToTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTopClick() {
      // 拿到scroll组件
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
