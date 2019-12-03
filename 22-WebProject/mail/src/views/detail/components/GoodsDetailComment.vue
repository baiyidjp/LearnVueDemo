<template>
  <div class="goods-comment">
    <div class="top-container">
      <div class="title">用户评价 ({{ goodsDetailCommentInfo.cRate }})</div>
      <div class="more" v-if="isShowComment">更多</div>
    </div>
    <div class="line"></div>
    <div v-if="isShowComment">
      <div class="comment-container" v-for="(comment, index) in goodsDetailCommentInfo.list" :key="index">
        <div class="avatar-container">
          <img :src="comment.user.avatar" alt="" class="avatar">
          <div class="user-name">{{ comment.user.uname }}</div>
        </div>
        <div class="comment">{{ comment.content }}</div>
        <div class="date-container">
          <div class="date-time">{{ comment.created | showDate }}</div>
          <div class="param">{{ comment.style }}</div>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in comment.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {formatDate} from "../../../common/utils";

  export default {
    name: 'GoodsDetailComment',
    props: {
      goodsDetailCommentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      isShowComment() {
        if (Object.keys(this.goodsDetailCommentInfo).length === 0) {
          return false
        }
        return this.goodsDetailCommentInfo.cRate !== 0
      }
    },

  //  过滤器
    filters: {
      showDate(value) {
        const date = new Date(value*1000)
        return formatDate(date, 'yyyy.MM.dd')
      }
    }
  }
</script>

<style scoped>

  .goods-comment {
    padding: 0 10px;
    border-bottom: 5px solid #fafafa;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    font-size: 15px;
  }

  .title {
    font-weight: 700;
  }

  .line {
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
  }

  .comment-container {
    padding: 10px 0 20px;
  }

  .avatar-container {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #dddddd;
    margin-right: 10px;
  }

  .comment {
    color: #9b9b9b;
    font-size: 13px;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .date-container {
    display: flex;
    align-items: center;
    color: #4a4a4a;
    font-size: 14px;
  }

  .date-time {
    margin-right: 10px;
  }

  .param {
    color: var(--color-tint);
  }

  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

</style>
