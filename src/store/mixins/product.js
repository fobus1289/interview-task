export const product = {
    namespaced: true,
    state: {
        products: [],
        selectedProducts: []
    },

    getters: {
        getProducts: state => state.products,
        selectedProducts: state => state.selectedProducts
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products || []
        },
        SET_SELECTED_PRODUCTS(state, product) {
            const prod = state.selectedProducts?.find(({id}) => id === product.id)

            if (!prod) {
                state.selectedProducts.push(product)
            }

            product.count++
        },
        UNSET_PRODUCT(state, productId) {
            const selectedProducts = state.selectedProducts

            const product = selectedProducts?.find(({id}) => id === productId)
            const index = selectedProducts.indexOf(product)
            product.count = 0

            selectedProducts.splice(index, 1)
        }
    },

    actions: {
        setProducts({commit}, products) {
            commit('SET_PRODUCTS', products)
        },
        setProduct({commit}, product) {
            commit('SET_SELECTED_PRODUCTS', product)
        },
        unsetProduct({commit}, index) {
            commit('UNSET_PRODUCT', index)
        }
    }

}
