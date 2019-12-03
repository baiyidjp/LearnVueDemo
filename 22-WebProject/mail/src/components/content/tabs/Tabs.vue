<template>
  <div class="tabs">
    <div class="item" v-for="(item, index) in tabsTitle" :key="item">
      <span :class="{active: index == currentIndex}" @click="itemClick(index)">{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      tabsTitle: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    watch: {
    //  使用watch可以监听值得改变
    },
    methods: {
      itemClick(index) {
        if (this.currentIndex == index) { return }
        this.currentIndex = index
        this.$emit('tabClick', index)
      },
      refreshCurrentIndex(index) {
        if (this.currentIndex == index) { return }
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

  .tabs {
    display: flex;
    align-items: center;

    background-color: #fff;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    box-shadow: 0 0.3px 0.3px rgba(0, 0, 0, .1);
  }

  .item {
    flex: 1;
    text-align: center;
    color: #666666;
    font-weight: normal;
  }

  .item span {
    padding: 3px;
  }

  .active {
    color: #ff8198;
    font-weight: 700;
    border-bottom: 2px solid #ff8198;
  }

</style>
