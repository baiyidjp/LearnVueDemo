import Toast from "./Toast";

const toastPlugin = {}

toastPlugin.install = function (Vue) {
  // Vue.use() 调用插件时会执行一次 install 方法， 将Vue传进来

  // 1. 创建一个组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // 2. 通过组件构造器创建组件
  const toast = new ToastConstructor()
  // 3. 通过组件构造器创建的组件 必须挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4. 将toast.$el组件的根元素添加到body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = function (message, duration = 2) {
    toast.show(message, duration)
  }

}

export default toastPlugin
