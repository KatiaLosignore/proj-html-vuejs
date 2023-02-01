<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { headerLinks, mainCards } from './data';

export default {
  name: 'DogCare',
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      headerLinks,
      mainCards
    }
  }
 
};
</script>

<template>
 
 <app-header :links="headerLinks"></app-header>
 <app-main :cards="mainCards"></app-main>
 <app-footer></app-footer>

</template>


<style lang="scss">
 @use './assets/scss/style.scss';


</style>