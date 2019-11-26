<template>
  <div class="recommend">
    <div class="item" v-for="item in recommend" :key="item.title">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommend: {
        type: Array,
        value() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #fafafa;
  }

  .item {
    flex: 1;
  }

  .item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }

</style>
