import Editor from "./components/Editor";
import VTooltip from 'v-tooltip'

const DoEdit = {
    install(Vue, options) {
        Vue.use(VTooltip)
        Vue.component("DoEdit", Editor);
    }
}
export default DoEdit;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MyPlugin)
}