const moduleA = (function () {

  let obj = {}

  let name = 'Dong'
  let age = 28

  function sum(num1, num2) {
    return num1 + num2
  }

  let flag = true

  if (flag) {
    console.log(name + '是天才')
  }

  obj.flag = flag
  obj.sum = sum

  return obj

})()
