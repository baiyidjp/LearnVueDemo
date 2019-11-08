const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-09',
        price: 199,
        count: 1
      },
      {
        id: 2,
        name: 'UNIX变成艺术',
        date: '2010-03',
        price: 99,
        count: 1
      },
      {
        id: 3,
        name: 'iOS从入门到放弃',
        date: '2013-05',
        price: 999,
        count: 1
      },
      {
        id: 4,
        name: 'Vue进阶',
        date: '2016-12',
        price: 88,
        count: 1
      }
    ]
  },
  computed: {
    allPrice() {
      let price = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   price += this.books[i].price * this.books[i].count
      // }
      /* in 拿到的数据是索引值  on 拿到的数据是 value */
      // for (let book of this.books) {
      //   price += book.price * book.count
      // }
      // return price
      // 使用高阶函数
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    }
  },
  methods: {
    increment(index) {
      this.books[index].count ++
    },
    decrement(index) {
      this.books[index].count --
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  },
  /* 过滤器 */
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})

// 高阶函数 filter map reduce

let nums = [1, 3, 10, 40, 455, 456, 83, 20]
console.log('原数组', nums)

// // filter
// let newNums = nums.filter(function (num) {
//   return num < 100
// })
// console.log('filter', newNums)
//
// // map
// newNums = newNums.map(function (num) {
//   return num*2
// })
// console.log('map', newNums)
//
// // reduce 对所有的元素做一个统一的操作 回调方法需要两个参数 一个是前一个值 一个是当前的值, 不传第二个参数默认的previousValue变为数组的第一个元素
// // let allNums = newNums.reduce(function (preNum, currentNum) {
// //   console.log(preNum, currentNum)
// //   return preNum + currentNum
// // })
// // reduce 对所有的元素做一个统一的操作 回调方法需要两个参数 一个是前一个值 一个是当前的值，可以传入第二个参数(initialValue)为默认的 previousValue
// let allNums = newNums.reduce(function (previousValue, currentValue) {
//   console.log(previousValue, currentValue)
//   return previousValue + currentValue
// }, 0)
// console.log(allNums)

// 函数式编程
// let total = nums.filter(function (num) {
//   return num < 100
// }).map(function (num) {
//   return num*2
// }).reduce(function (pre, current) {
//   return pre+current
// })
// console.log(total)

// 使用箭头函数
let total = nums.filter(num => num < 100).map(num => num*2).reduce((pre, num) => pre+num)
console.log(total)
