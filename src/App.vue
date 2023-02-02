<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { headerLinks, mainCards, footerMenus } from './data';

export default {
  name: 'DogCare',
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      headerLinks,
      mainCards,
      footerMenus
    }
  }
 
};
</script>

<template>
 
 <app-header :links="headerLinks"></app-header>
 <app-main :cards="mainCards"></app-main>
 <app-footer :menus="footerMenus"></app-footer>

</template>


<style lang="scss">
 @use './assets/scss/style.scss';


</style>