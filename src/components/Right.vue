<template>
  <div class="col-6">
    <h2 class="text-center">Cart#1</h2>
    <Table/>
  </div>
</template>

<script>
export default {
  components: {Table: () => import("@/components/Table")}
}
</script>