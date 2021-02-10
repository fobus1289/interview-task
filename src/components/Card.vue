<template>
  <div class="mt-2 mb-2 row g-0 bg-light position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img :src="item.image" class="w-100" alt="...">
    </div>
    <div class="col-md-6 p-4 ps-md-0">
      <h5 class="mt-0">{{ item.title }}</h5>
      <h4 class="mt-0">{{ item.price | price }}</h4>
      <p>{{ item.description }}</p>
      <button @click="setProduct(item)" class="btn btn-success">buy</button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {price} from "@/utils/filters/global"

export default {
  props: {
    item: Object
  }
}
</script>