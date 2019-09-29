import Loading from './Loading.vue';

//(目标对象，要新增的属性，属性的构造器)
function createLoading(Vue, options) {
    Object.defineProperty(Vue.prototype, 'loading', {
        value: function () {
            let dom = document.createElement('div');
            dom.id = "loading";
            document.getElementById('app').appendChild(dom);

            let LoadingContructor = Vue.extend(Loading);
            let LoadingInstance = new LoadingContructor();

            LoadingInstance.$mount();
            dom.appendChild(LoadingInstance.$el)

            LoadingInstance.$on('closed', () => {
                console.log("closed")
                document.getElementById('app').removeChild(dom)
            })
            LoadingInstance.visiable = true
        }
    })
}
export default createLoading

//vue插件定义  1.对象install   2.函数

// let LoadingPlugin = {
//     install(Vue, options) {
//         createLoading(Vue, options)
//     }
// }
