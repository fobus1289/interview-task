<template>

  <div>
    <!-- table -->
    <table class="table">
      <tr v-for="(selected ,index) in selectedProducts" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ selected.title }}</td>
        <td>{{ sum(selected) | price }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button :disabled="selected.count < 1" @click="selected.count--" type="button" class="btn btn-primary">-
            </button>
            <input :readonly="selected.count < 1" type="number" v-model="selected.count"/>
            <button @click="selected.count++" type="button" class="btn btn-primary">+</button>
          </div>
        </td>

        <td>{{ selected.price | price }}</td>
        <td>
          <button @click="removeProduct(selected.id)" type="button" class="btn btn-danger">
            X
          </button>

        </td>

      </tr>
    </table>
    <!-- total -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">
          Total : {{ total }}
          <br>
          <hr>
          Discount : {{ thereDiscount }} % <br>
          <hr>
          Total payable : {{ discount }} <br>
          <hr>
        </h5>
        <button class="btn btn-primary">Payment</button>
      </div>
    </div>

  </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import {price} from "@/utils/filters/global"

export default {
  data: () => ({
    thereDiscount: 15
  }),
  methods: {
    sum(selected) {

      return parseFloat(selected.price * selected.count).toFixed(2)

    }
  },
  computed: {
    total() {
      const totalPrice = this.selectedProducts.reduce((counter, product) => {

        const {price, count} = product

        counter += (price * count)

        return counter

      }, 0)

      return parseFloat(totalPrice).toFixed(2)

    },
    discount() {

      const {
        total,
        thereDiscount
      } = this

      const discount = total - (total * (thereDiscount / 100))

      return parseFloat(discount).toFixed(2)

    }

  }
}
</script>