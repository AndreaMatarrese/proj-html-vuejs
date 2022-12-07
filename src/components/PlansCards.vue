<template>
  <div>
    <h5 class="card-title fw-bolder text-capitalize">{{planscard.title}}</h5>
    <p class="price">{{planscard.price}}</p>
    <p class="price">{{planscard.projects}}</p>
    <p class="price">{{planscard.storage}}</p>
    <p class="price">{{planscard.users}}</p>
    <button class="btn-white">Start today</button>
  </div>
</template>

<script>
export default {
  name: 'PlansCard',
  props: {
    planscard: Object,
  },
};
</script>

<style lang="scss" scoped>

</style>
