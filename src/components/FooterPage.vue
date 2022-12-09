<template>
  <div>
    <div class="container col-10 row row-cols-1 m-auto
    flex-column justify-content-center align-items-center">
      <img src="@/assets/images/logo_seo_2x.png" alt="logo-black" class="col-2 m-auto py-5">
      <div class="menu-voice col-8 pb-5">
        <ul class="list-group list-group-horizontal list-unstyled gap-3
        align-items-center justify-content-center">
          <li v-for="item in arrMenuFooter" :key="item.text">
          <a :href="item.link">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="copy text-center py-4">
        <p>Copyright 2012 - 2020 | Avada Theme by <a href="#"><b>ThemeFusion</b></a>
          | All Rights Reserved | Powered by <a href="#"><b>WordPress</b></a></p>
      </div>
      <div class="socials col-4 text-center">
            <img src="@/assets/images/icons8-f-di-facebook-50.png" alt="yt" class="col-1 ms-5">
            <img src="@/assets/images/icons8-instagram-50.png" alt="yt" class="col-1 ms-5">
            <img src="@/assets/images/icons8-twitter-50.png" alt="yt" class="col-1 ms-5">
            <img src="@/assets/images/icons8-riproduci-youtube-60.png"
             alt="yt" class="col-1 ms-5">
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.json';

export default {
  name: 'FooterPage',
  data() {
    return {
      arrMenuFooter: MenuList,
    };
  },

};
</script>

<style lang="scss" scoped>
@use '@/assets/scssVariables.scss' as v;
@import '@/assets/scssVariables.scss';
.yt{
  content: 'f167';
  color: $regent-gray !important;;
}
.socials{
  color: $regent-gray!important;;
}
.menu-voice a, .copy a{
  text-decoration: none;
  color:black;
}
.menu-voice a:hover{
  color: $yellow-orange;
}
.menu-voice li:first-child a{
  color: $yellow-orange;
}
.copy{
  color: $scorpion;
}
</style>
