<template>
  <div>
    <div v-for="review in arrReview" :key="review" class="text-center">
      <img :src="review.image" alt="image-rev">
      <div class="pb-3">{{review.review}}</div>
      <div>{{review.name}}, {{review.rule}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselReview',
  data() {
    return {
      arrReview: [
        {
          image: 'src/assets/images/testimonials-2.jpg',
          name: 'Luis desalvo',
          rule: 'Creo Tech',
          review: 'Ability proceeds from a fusion of skills, knowledge, undestanding and imagination, consolidated by experience.',
        },
        {
          image: 'src/assets/images/testimonials-1.jpg',
          name: 'Shelia McCourtney',
          rule: 'Architet',
          review: 'Beauty is when you can appreciate yourself. When you love yourself, that’s when you’re most beautiful.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
