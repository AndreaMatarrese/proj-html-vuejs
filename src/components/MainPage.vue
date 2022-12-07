<template>
  <div class="containter-fluid">
    <section class="first-section ">
      <div class="row col-10 m-auto">
        <div class="text col-5">
          <h2 class="fw-bold display-6">SEM Campaigns Made Simple With Avada</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
            Phasellus eu ornare erat. Curabitur pulvinar elit.
           </p>
          <div class="row col-11">
            <button class="btn-yellow col-4">Buy avada now</button>
            <button class="btn-blue col-4 ms-3">Contact us</button>
          </div>
        </div>
        <div class="rx col-8">
        </div>
      </div>
    </section>
    <section class="second-section row flex-direction-column justify-content-center">
      <div class="title col-4 m-auto text-center py-5">
        <h2 class="fw-bolder p-0">Meet the new agency SEO template from the avada team</h2>
        <div>Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusatium doloremque laudantium
        </div>
      </div>
      <div class="cards-team row justify-content-center gap-4 py-3">
        <div class="card text-center col-3 border-0"
        v-for="cards in arrTeams" :key="cards.icon">
          <font-awesome-icon :icon="cards.icon" color="#ffa837" class="py-3 icoTeam" />
          <h5 class="card-title fw-bolder">{{cards.title}}</h5>
          <p class="card-body">{{cards.body}}</p>
        </div>
      </div>
      <img src="@/assets/images/agency-seo-desk-front-1200x570.jpg"
      alt="desjk-seo" class="w-75">
    </section>

  </div>
</template>

<script>
import CardsTeam from './CardsTeam.json';

export default {
  name: 'MainPage',
  data() {
    return {
      arrTeams: CardsTeam,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scssVariables.scss' as v;
@import '@/assets/scssVariables.scss';
.first-section{
  background-image: url('@/assets/images/1-hero-image.png');
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: cover;
  color: white;
  padding-top: 12rem ;
  padding-bottom: 12rem ;
}
.second-section{
  background-color: $alabaster;
}
.icoTeam{
  font-size: 1.5rem;
}

</style>
