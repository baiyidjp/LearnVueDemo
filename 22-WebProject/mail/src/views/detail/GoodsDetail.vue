<template>
  <div>
    <navigation-bar :is-show-back="true">
      <div slot="center">
        <tabs class="detail-tabs" :tabs-title="tabsTitle" @tabClick="itemClick"></tabs>
      </div>
    </navigation-bar>
  </div>
</template>

<script>

  import NavigationBar from "../../components/common/navigation-bar/NavigationBar";
  import Tabs from "../../components/content/tabs/Tabs";

  export default {
    name: 'GoodsDetail',
    data() {
      return {
        tabsTitle: ['商品', '参数', '评论', '推荐'],
        iid: null
      }
    },
    components: {
      NavigationBar,
      Tabs
    },
    methods: {
      itemClick(index) {
        console.log(index);
      }
    },
    created() {
      this.iid = this.$route.query.iid
    }
  }
</script>

<style scoped>

  .detail-tabs {
    background-color: #fafafa;
  }

</style>
