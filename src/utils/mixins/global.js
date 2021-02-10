import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'

const mixin = {
    computed: {
        ...mapGetters({
            products: 'product/getProducts',
            selectedProducts: 'product/selectedProducts'
        })
    },
    methods: {
        ...mapActions({
            setProducts: 'product/setProducts',
            setProduct: 'product/setProduct',
            removeProduct: 'product/unsetProduct'
        })
    }
}

Vue.mixin(mixin)