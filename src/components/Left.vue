<template>
  <div class="col-6">

    <input v-model="search" class="form-control me-2" type="search" placeholder="Search by title" aria-label="Search">

    <div class="mt-2 row">
      <div class="col-6" v-for="(product,index) in sorted" :key="index">
        <Card :item="product"/>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
    Card: () => import("@/components/Card")
  },
  data: () => ({
    search: ''
  }),
  async created() {

    try {
      const json = await fetch('https://fakestoreapi.com/products')

      /**
       * @var {Array} data
       */
      const data = await json.json()

      const result = data.map(value => {
        return {
          ...value,
          count: 0
        }
      })

      this.setProducts(result)
    } catch (e) {
      console.log(e)
    }

  },

  computed: {
    sorted() {
      if (!this.search) return this.products
      return this.products.filter(({title}) => title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>