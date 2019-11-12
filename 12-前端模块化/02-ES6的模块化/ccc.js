/* 导入的对象 */
import {flag, sum} from "./aaa.js"

if (flag) {
  console.log('模块化数据')
}

console.log(sum(29, 30))

/* 导入的变量 */
import {age} from "./aaa.js";
console.log(age);

/* 导入的函数 */
import {sub, Person} from "./aaa.js";

console.log(sub(20, 8))

const p = new Person()
p.run()

/* export default */
/* 通过 export default 导入 可以自定义命名 */
import dName from "./aaa.js";
console.log(dName);

/* 统一全部导入 */
/* as 起别名 */
import * as aaa from "./aaa.js"

console.log(aaa.age)
console.log(aaa.flag)

