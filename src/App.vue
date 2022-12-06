<template>
  <div>
    <header-page></header-page>
    <main-page></main-page>
    <footer-page></footer-page>
  </div>
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },

};
</script>

<style lang="scss">
@import 'bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
@import './assets/scssVariables.scss';
html{
  font-family: 'Source Sans Pro', sans-serif;
}
img{
  max-width: 100%;
  min-width: 0;
}
.btn-yellow{
  background-color: $yellow-orange;
  border: 1px solid $yellow-orange;
  color: white!important;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .05rem;
  text-transform: uppercase;
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: .9rem;
  padding-right: .9rem;
  border-radius: 50px;
}
</style>
