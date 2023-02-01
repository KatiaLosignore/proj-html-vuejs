<script>
import MainJumbotron from './MainSections/MainJumbotron.vue';
import MainAbout from './MainSections/MainAbout.vue';
export default {
     name: 'AppMain',
     components: { MainJumbotron, MainAbout },
};
</script>


<template>
    
    <main-jumbotron title="Welcome to DogMilo Pets" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></main-jumbotron>
    <main-about paragraph="About us" title="Welcome DogMilo Pets" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"></main-about>

</template>

<style lang="scss" scoped>




</style>

