const name = 'dong'
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(name + '是天才')
}

// 第一种 导出
export {flag, sum}

// 第二种导出
export var age = 19

// 第三种导出 函数/类
export function sub(num1, num2) {
  return num1 - num2
}

export class Person {

  run() {
    console.log('run')
  }
}

// 第4种导出 export default
/* export default 不允许存在多个 */
const defaultName = 'dong peng'
export default defaultName
