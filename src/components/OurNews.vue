<template>
  <div class="cards col-12 row row-cols-3 text-center">
    <div class="col-4">
      <img src="@/assets/images/related-service-2-700x441.jpg" alt="relatedseervice">
      <h5 class="card-title fw-bolder text-capitalize">Why you need a SEO agency now</h5>
      <p class="subtitle small">November 1st, 2017</p>
      <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Dolores magni laudantium eaque sapiente cumque.
      </p>
    </div>
    <div class="col-4">
      <img src="@/assets/images/related-service-4-700x441.jpg" alt="relatedseervice">
      <h5 class="card-title fw-bolder text-capitalize">SEO tips for your startup</h5>
      <p class="subtitle small">November 1st, 2017</p>
      <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Dolores magni laudantium eaque sapiente cumque.
      </p>
    </div>
    <div class="col-4">
      <img src="@/assets/images/blog-post-6-700x441.jpg" alt="relatedseervice">
      <h5 class="card-title fw-bolder text capitalize">Image optimization for your site</h5>
      <p class="subtitle small">November 1st, 2017</p>
      <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Dolores magni laudantium eaque sapiente cumque.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurNews',
};
</script>

<style lang="scss" scoped>
@use '@/assets/scssVariables.scss' as v;
@import '@/assets/scssVariables.scss';
.card-title{
  color: $yellow-orange;
  font-size: 1.2rem;
  padding-top: 1.5rem ;
}
</style>
