<template>
  <div class="navbar position-fixed fixed-top menu">
    <div class="navbar-main bg-transparent col-8 row row-cols-2
                justify-content-between align-items-center
                m-auto">
      <img src="@/assets/images/logo_seo_w_2x.png" class="col-2" alt="logo-seo">
      <div class="menu-voice col-9 row justify-content-end">
        <ul class="list-group list-group-horizontal list-unstyled
        gap-3 align-items-center justify-content-end">
          <li v-for="item in arrMenu" :key="item.text">
          <a v-if="item.type == 'link'" :href="item.link">{{item.text}}</a>
          <!-- <a v-else>{{}}</a> -->
          </li>
          <button class="btn-yellow align-self-center">Get in touch now</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.json';

export default {
  name: 'HeaderPage',
  data() {
    return {
      arrMenu: MenuList,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scssVariables.scss' as v;
@import '@/assets/scssVariables.scss';
a{
  text-decoration: none;
  color:white;
}
.menu-voice li:first-child a{
  color: $yellow-orange;
}
.menu-voice a:hover{
  color: $yellow-orange;
}
.menu-voice .list-group li:nth-child(5):after {
  content: 'APPLY';
  font-size: 12px;
  border: 1px solid $yellow-orange;
  color: $yellow-orange!important;
  padding: .3rem;
  border-radius: 5px;
  margin-left: 5px;
}
.menu{
  background-color: rgba(0, 0, 0, 0.149);
}
</style>
