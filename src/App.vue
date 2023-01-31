<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { headerLinks } from './data';

export default {
  name: 'DogCare',
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      headerLinks,
    }
  }
 
};
</script>

<template>
 
 <app-header :links="headerLinks"></app-header>
 <app-main></app-main>
 <app-footer></app-footer>

</template>


<style lang="scss">
 @use './assets/scss/style.scss';


</style>