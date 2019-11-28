<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        // 动态决定是否实时监听
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      /* 监听滚动 */
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }

      /* 上拉加载 */
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      // 滚动
      scrollTo(x, y, duration = 250) {
        this.scroll && this.scroll.scrollTo(x, y, duration)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        console.log('refresh');
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
