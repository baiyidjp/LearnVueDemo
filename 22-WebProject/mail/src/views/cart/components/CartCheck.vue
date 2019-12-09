<template>
  <div class="cart-check" @click.stop="checkedImageClick">
    <img :src="imgPath" alt="" class="check-image">
  </div>
</template>

<script>
  export default {
    name: 'CartCheck',
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    },
    // watch: {
    //   checked(newValue) {
    //     console.log(newValue);
    //     this.checked = newValue
    //   }
    // },
    computed: {
      imgPath() {
        return this.checked ? require('../../../assets/img/cart/cart_checked.svg') : require('../../../assets/img/cart/cart_unchecked.svg')
      }
    },
    methods: {
      checkedImageClick() {
        this.$emit('checkedClick')
      }
    }
  }
</script>

<style scoped>

  .check-image {
    width: 24px;
    height: 24px;
  }

</style>
