import Vue from 'vue'
import Vuex from 'vuex'
import {product} from './mixins/product'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product
    }
})
