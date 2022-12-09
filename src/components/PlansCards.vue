<template>
  <div>
    <h5 class="card-title fw-bolder text-capitalize">{{planscard.title}}</h5>
    <p class="price">{{planscard.price}}<span class="uno">99</span>
      <span class="due">montly</span></p>
    <p class="project pb-3">{{planscard.projects}}</p>
    <p class="storage pb-3">{{planscard.storage}}</p>
    <p class="users pb-3">{{planscard.users}}</p>
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
@use '@/assets/scssVariables.scss' as v;
@import '@/assets/scssVariables.scss';
.price{
  position: relative;
  color: #627cfc;
  font-size: 3rem;
  font-weight: 700;
  &::before{
    content: '$';
    font-size: 1.5rem;
    vertical-align:super;
    color: $scorpion;
  }
  .uno{
    top:15px;
    position: absolute;
  }
  .due{
    vertical-align: baseline;
    font-style: italic;
    font-size: .8rem;
    color: $scorpion;
  }
}
</style>
