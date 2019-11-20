<template>
  <div class="item" @click="itemClick">
    <img v-if="isActive" :src="data.activeImage">
    <img v-else :src="data.image">
    <div :style="titleStyle">{{ data.title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      data: Object,
      titleColor: String,
      titleActiveColor: String,
      titleFontSize: String
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path == this.data.path
      },
      titleStyle() {
        return this.isActive ? {color: this.titleActiveColor, fontSize: this.titleFontSize} : {color: this.titleColor, fontSize: this.titleFontSize}
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path == this.data.path) {return}
        this.$router.replace(this.data.path)
      }
    }
  }
</script>

<style scoped>

  .item {
    flex: 1;
    text-align: center;
  }

  .item img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-bottom: 2px;
    /* 行内元素vertical-align默认值为：baseline。即默认情况下，会把图片当成sphinx单词中的字母s、n、x，会自动预留一定位置给p字母这样的元素，设置middle 取消预留的3px */
    vertical-align: middle;
  }

</style>
