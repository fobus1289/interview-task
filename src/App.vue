<template>
  <div class="mt-3 container-fluid">
    <div class="row">
      <Left/>
      <Right/>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    Right: () => import("@/components/Right"),
    Left: () => import("@/components/Left")
  }
}
</script>