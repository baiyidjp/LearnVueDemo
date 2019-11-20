<template>
  <div class="tab-bar">
    <tab-bar-item
      v-for="data in tabBarDataArray"
      :data="data"
      :title-color="tabBarTitleColor"
      :title-active-color="tabBarTitleActiveColor"
      :title-font-size="tabBarTitleFontSize"
      :key="data.title">
    </tab-bar-item>
  </div>
</template>

<script>

  import TabBarItem from "./TabBarItem";

  export default {
    name: 'TabBar',
    components: {
      TabBarItem
    },
    props: {
      tabBarTitleColor: {
        type: String,
        default: '#000000'
      },
      tabBarTitleActiveColor: {
        type: String,
        default: '#0000bb'
      },
      tabBarTitleFontSize: {
        type: String,
        default: '12px'
      },
      tabBarDataArray: Array
    }
  }
</script>

<style scoped>

  .tab-bar {
    /* 固定在底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    background-color: #fafafa;
    height: 49px;
    box-shadow: 0 -0.5px 1px rgba(0, 0, 0, 0.1);
  }

</style>
