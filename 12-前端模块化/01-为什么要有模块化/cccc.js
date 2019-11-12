(function () {

  moduleA.flag = false

  if (moduleA.flag) {
    console.log('模块化数据')
  }

  console.log(moduleA.sum(1, 3))

})()
