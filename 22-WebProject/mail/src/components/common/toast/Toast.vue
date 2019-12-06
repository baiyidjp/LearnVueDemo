<template>
  <div class="toast" v-show="isShow">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        isShow: false,
        message: 'Default Toast'
      }
    },
    methods: {
      show(message, duration) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ""
        }, duration*1000)
      }
    }
  }
</script>

<style scoped>

  .toast {
    position: fixed;
    width: 100%;
    top: 50%;
    /* 相对于自身的移动 % */
    transform: translateY(-50%);
    z-index: 999;
    text-align: center;
  }

  .message {
    background-color: rgba(0,0,0, 0.8);
    color: #eee;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
  }

</style>
