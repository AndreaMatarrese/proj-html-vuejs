<template>
  <div class="containter-fluid">
    <!-- first section -->
    <section class="first-section sez1">
      <div class="row col-md-8 m-auto">
        <div class="text col-md-6">
          <h2 class="fw-bold display-6">SEM Campaigns Made Simple With Avada</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
            Phasellus eu ornare erat. Curabitur pulvinar elit.
           </p>
          <div class="row col-md-11">
            <button class="btn-yellow col-md-4">Buy avada now</button>
            <button class="btn-blue col-md-4 ms-3">Contact us</button>
          </div>
        </div>
      </div>
    </section>
    <!-- second section -->
    <section class="second-section row flex-column align-items-center" id="we">
      <div class="col-8 row flex-column justify-content-center align-items-center">
        <div class="title-2 col-6 m-auto text-center py-5">
          <h2 class="fw-bolder p-0 text-capitalize">Meet the new agency SEO template
          from the avada team</h2>
          <div>Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusatium doloremque laudantium
          </div>
        </div>
        <div class="card-group cards-team col-12 m-auto row justify-content-center gap-3 py-3">
          <div class="card text-center col-4 border-0"
          v-for="cards in arrTeams" :key="cards.icon">
            <font-awesome-icon :icon="cards.icon" color="#ffa837" class="py-3 icoTeam card-img" />
            <h5 class="card-title fw-bolder">{{cards.title}}</h5>
            <p class="card-body">{{cards.body}}</p>
          </div>
        </div>
        <img src="@/assets/images/agency-seo-desk-front-1200x570.jpg"
        alt="desjk-seo" class="w-75 m-auto">
      </div>
    </section>
    <!-- third section -->
    <section class="third-section text-light py-5" id="services">
      <div class="col-8 row flex-column align-item-center m-auto">
        <div class="title-3 col-6 m-auto text-center py-5">
          <h2 class="fw-bolder p-0 text-capitalize">See our top notch services</h2>
          <div>Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusatium doloremque laudantium
          </div>
        </div>
        <div class="cards-seo card-group col-12 row justify-content-center gap-4 py-3">
          <div class="card cardseo text-center col-3 border-0 p-2 py-3"
          v-for="cardseo in arrSeo" :key="cardseo.icon">
            <font-awesome-icon :icon="cardseo.icon" color="#ffa837" class="py-3 icoTeam" />
            <h5 class="card-title fw-bolder text-capitalize">{{cardseo.title}}</h5>
            <p class="card-body">{{cardseo.body}}</p>
            <div class="readmore text-capitalized cursor-pointer">
              <a :href="cardseo.more" more>Read more<font-awesome-icon
                icon="fa-solid fa-chevron-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- fourth section -->
    <section class="fourth-section row flex-column justify-content-center align-items-center py-2"
    id="work">
      <div class="col-10 row flex-column align-item-center m-auto">
        <div class="title-2 col-4 m-auto text-center py-5">
          <h2 class="fw-bolder p-0 text-capitalize">Our work</h2>
          <div>Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusatium doloremque laudantium
          </div>
        </div>
        <div class="images col-10 row row-cols-3 m-auto g-3">
          <!-- <img v-for="image in arrImgs" :key="'../../images/' + image.url"
          :src="image.url" :alt="image.alt"> Non mi prende le immagini -->
          <img src="../assets/images/case-study-gallery-3-1.jpg" class="col" alt="">
          <img src="../assets/images/case-study-gallery-2.jpg" class="col" alt="">
          <img src="../assets/images/case-study-gallery-1-1.jpg" class="col" alt="">
          <img src="../assets/images/case-study-gallery-4-1.jpg" class="col" alt="">
          <img src="../assets/images/case-study-gallery-5-1.jpg" class="col" alt="">
          <img src="../assets/images/case-study-gallery-6-1.jpg" class="col" alt="">
        </div>
        <button class="btn-yellow col-2 m-auto my-5">View our work</button>
      </div>
    </section>
    <!-- fifth section -->
    <section class="fifth-section text-light py-5" id="plans">
      <div class="col-8 row flex-column justify-content-center align-items-center m-auto">
        <div class="title-3 col-6 m-auto text-center py-5">
          <h2 class="fw-bolder p-0 text-capitalize">Our plans</h2>
          <div>Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusatium doloremque laudantium
          </div>
        </div>
        <div class="cards-seo card-group col-12 row gap-3 py-3">
          <plans-cards class="card cardplans text-center col-3 border-0
          rounded-0 shadow p-5 mb-5 p-2 py-5 text-dark"
          v-for="cardplans in arrPlans" :key="cardplans"
          :planscard="cardplans">
          </plans-cards>
        </div>
      </div>
    </section>
    <!-- sixth section -->
    <section class="sixth-section row flex-column align-items-center justify-content-center"
     id="news">
     <div class="col-8 row flex-column alig-items-center justify content-center">
      <div class="title-2 col-5 m-auto text-center py-5">
        <h2 class="fw-bolder p-0 text-capitalize">Our news</h2>
        <div>Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusatium doloremque laudantium
        </div>
        </div>
        <our-news></our-news>
        <button class="btn-yellow col-2 my-5 m-auto">View our work</button>
     </div>
    </section>
    <!-- seventh section -->
    <section class="seventh-section py-5">
      <div class="col-8 row flex-column alig-items-center justify content-center m-auto">
        <h2 class="texr-capitalize text-center">What our client say</h2>
        <div class="slider col-10 m-auto mb-5 border-bottom py-5">
          <carousel-review></carousel-review>
        </div>
        <div class="logo col-9 row row-cols-4 m-auto justify-content-between">
          <img src="@/assets/images/clients_partner_5-200x202.png" alt="partner-5"
          class="col-2">
          <img src="@/assets/images/clients_partner_6-200x202.png" alt="partner-6"
          class="col-2">
          <img src="@/assets/images/clients_partner_1-200x202.png" alt="partner-1"
          class="col-2">
          <img src="@/assets/images/clients_partner_2-200x202.png" alt="partner-2"
          class="col-2">
        </div>
      </div>
    </section>
    <!-- eight section -->
    <section class="eighth-section text-light">
      <div class="title-3 col-4 m-auto text-center ">
        <h2 class="fw-bolder p-0 text-capitalize">Start your free consultation</h2>
        <div class="py-4">Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusatium doloremque laudantium
        </div>
        <button class="btn-yellow">Contact us now</button>
      </div>
    </section>

  </div>
</template>

<script>
import CardsTeam from './CardsTeam.json';
import CardsSeo from './CardsSeo.json';
import CardsImages from './CardsImages.json';
import CardsPlans from './CardsPlans.json';
import PlansCards from './PlansCards.vue';
import OurNews from './OurNews.vue';
import CardsReview from './CardsReview.json';
import CarouselReview from './CarouselReview.vue';

export default {
  components: {
    PlansCards,
    OurNews,
    CarouselReview,
  },
  name: 'MainPage',
  data() {
    return {
      arrTeams: CardsTeam,
      arrSeo: CardsSeo,
      arrImgs: CardsImages,
      arrPlans: CardsPlans,
      arrReview: CardsReview,
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
.third-section{
  background-image: url('@/assets/images/pattern_background.png');
  background-size: cover;
  background-color: $deep-cove;
}
.cardseo{
  background-color:$lucky-point;
}
.readmore a{
  color: $yellow-orange;
  font-size: 1rem ;
  text-decoration: none;
  &:hover{
    color: white;
  }
}
.fifth-section{
  background-image: url('@/assets/images/background1.jpg');
}
.eighth-section{
  padding: 10rem 0;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.604);
  background-image: url('@/assets/images/case-study-gallery-3-1-1200x900.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
