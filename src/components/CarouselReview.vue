<template>
  <div class="text-center">
    <!-- <div v-for="review in arrReview"
    :key="review" class="text-center">
      <img :src="review.image" alt="image-rev">
      <div class="pb-3">{{review.review}}</div>
      <div>{{review.name}}, {{review.rule}}</div>
    </div> -->
    <img src="@/assets/images/testimonials-2.jpg" alt="rev" class="person rounded-circle">
    <div class="py-3 review col-9 m-auto">Ability proceeds from a fusion of skills, knowledge,
      undestanding and imagination, consolidated by experience.</div>
    <div><b>Luis Desalvo</b>, CREO TECh</div>
    <div class="circles">
      <span class="rounded-circle c-black"></span>
      <span class="rounded-circle c-blank ms-1"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselReview',
  // data() {
  //   return {
  //     arrReview: [
  //       {
  //         image: '@/assets/images/testimonials-1.jpg',
  //         name: 'Luis desalvo',
  //         rule: 'Creo Tech',
  //         review: 'Ability proceeds from a fusion of skills, knowledge,
  // undestanding and imagination, consolidated by experience.',
  //       },
  //       {
  //         image: '@/assets/images/testimonials-1.jpg',
  //         name: 'Shelia McCourtney',
  //         rule: 'Architet',
  //         review: 'Beauty is when you can appreciate yourself.
  // When you love yourself, that’s when you’re most beautiful.',
  //       },
  //     ],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.review{
font-style: italic;
}
.c-black{
  height: 15px;
  width: 15px;
  padding: .0rem .7rem;
  background-color: black;
}
.c-blank{
  height: 15px;
  width: 15px;
  padding: .0rem .7rem;
  border: 1px solid black;
}
</style>
