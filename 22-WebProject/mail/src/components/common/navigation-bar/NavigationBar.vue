<template>
  <div class="navigation-bar" :style="navigationBarStyle">
    <div class="left-l" v-if="isShowBack">
      <slot name="left-l">
        <img src="~assets/img/navigation-bar/navigation_bar_back.svg">
      </slot>
    </div>
    <div class="left-r">
      <slot name="left-r"></slot>
    </div>
    <div class="center" :style="titleStyle">
      <slot name="center">
        <div>{{ title }}</div>
      </slot>
    </div>
    <div class="right-l">
      <slot name="right-l"></slot>
    </div>
    <div class="right-r" v-if="isShowBack">
      <slot name="right-r"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'NavigationBar',
    props: {
      backgroundColor: {
        type: String,
        default: '#fafafa'
      },
      title: String,
      titleColor: {
        type: String,
        default: '#000000'
      },
      titleFontSize: {
        type: Number,
        default: 15
      },
      titleFontWeight: {
        type: String,
        default: 'bold'
      },
      isShowBack: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      navigationBarStyle() {
        return {backgroundColor: this.backgroundColor}
      },
      titleStyle() {
        return {color: this.titleColor, fontSize: this.titleFontSize, fontWeight: this.titleFontWeight}
      }
    }
  }
</script>

<style scoped>

  .navigation-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    align-items: center;
    box-shadow: 0 0.3px 0.3px rgba(0, 0, 0, .1);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
  }

  .left-l,.left-r,.right-l,.right-r {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-l img {
    width: 20px;
    height: 20px;
  }

  .center {
    flex: 1;
    text-align: center;
  }

</style>
