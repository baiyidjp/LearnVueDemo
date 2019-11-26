<template>
  <div>
    <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
    <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
    <navigation-bar title="购物街" :isShowBack="false" backgroundColor="#ff8198" titleColor="#ffffff">
    </navigation-bar>
  </div>
</template>

<script>

  import NavigationBar from '../../components/common/navigation-bar/NavigationBar';
  import homeRequest from "../../network/home";

  export default {
    name: 'Home',
    components: {
      NavigationBar
    },
    data() {
      return {
        result: null,
        banner: null,
        dKeyword: null,
        keywords: null,
        recommend: null
      }
    },
    created() {
      // 请求数据
      homeRequest.homeMultiData().then(result => {
        console.log(result)
        this.result = result
        this.banner = result.data.banner.list
        this.dKeyword = result.data.dKeyword.list
        this.keywords = result.data.keywords.list
        this.recommend = result.data.recommend.list
      })
    }
  }
</script>

<style scoped>

</style>
